function doGet(e) {
  try {
    console.log('=== doGet called ===');
    console.log('GET parameters:', JSON.stringify(e.parameter, null, 2));
    
    var params = e.parameter;
    if (params.sheet && params.action === 'fetch') {
      return fetchSheetData(params.sheet);
    } else if (params.sheet) {
      return fetchSheetData(params.sheet);
    }
    return ContentService.createTextOutput(JSON.stringify({
      status: "ready",
      message: "Google Apps Script is running",
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error in doGet:", error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function fetchSheetData(sheetName) {
  try {
    var ss = SpreadsheetApp.openById("1VUNPVBFee5sVIlNWnbP35zGUZMB9etGyyL3r32-AmQ8");
    var sheet = ss.getSheetByName(sheetName);
    var dataRange = sheet.getDataRange();
    var data = dataRange.getDisplayValues();
    var headers = data[0];
    var timeColumns = [];
    
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i].toString().toLowerCase();
      if (header.includes('time') || header.includes('in') || header.includes('out')) {
        timeColumns.push(i);
      }
    }
    
    for (var row = 1; row < data.length; row++) {
      for (var col of timeColumns) {
        if (data[row][col] && data[row][col] !== '') {
          var cell = sheet.getRange(row + 1, col + 1);
          var displayValue = cell.getDisplayValue();
          data[row][col] = displayValue;
        }
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      data: data
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    console.log('=== doPost called ===');
    console.log('Request method:', e && e.postData ? 'POST with body' : 'GET or POST without body');
    console.log('Raw event object keys:', Object.keys(e || {}));
    
    var params = e.parameter;
    var action = params.action || 'insert';
    
    console.log('Action received:', action);
    console.log('All params:', JSON.stringify(params, null, 2));
    console.log('Params keys:', Object.keys(params || {}));
    
    if (action === 'uploadFile') {
      return handleFileUpload(e);
    }
    
    var sheetName = (params.sheetName || 'Program').trim();
    console.log('Attempting to open spreadsheet with ID: 1VUNPVBFee5sVIlNWnbP35zGUZMB9etGyyL3r32-AmQ8');
    
    var ss;
    try {
      ss = SpreadsheetApp.openById("1VUNPVBFee5sVIlNWnbP35zGUZMB9etGyyL3r32-AmQ8");
      console.log('Spreadsheet opened successfully');
    } catch (spreadsheetError) {
      console.error('Error opening spreadsheet:', spreadsheetError);
      throw new Error('Cannot access spreadsheet. Check ID and permissions: ' + spreadsheetError.toString());
    }
    
    var sheet;
    try {
      sheet = ss.getSheetByName(sheetName);
      console.log('Sheet found:', sheet ? 'Yes' : 'No');
      if (!sheet) {
        // Fallback to default 'Program' tab if the provided sheet is missing
        var fallback = ss.getSheetByName('Program');
        if (fallback) {
          console.log('Primary sheet not found (', sheetName, ') - falling back to "Program"');
          sheet = fallback;
        } else {
          console.log('Available sheets:', ss.getSheets().map(function(s){ return s.getName(); }));
          throw new Error('Sheet "' + sheetName + '" not found');
        }
      }
    } catch (sheetError) {
      console.error('Error getting sheet:', sheetError);
      throw new Error('Cannot access sheet "' + sheetName + '": ' + sheetError.toString());
    }
    
    if (action === 'insert') {
      var rowData = JSON.parse(params.rowData);
      sheet.appendRow(rowData);
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "Data inserted successfully"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    else if (action === 'update') {
      var rowIndex = parseInt(params.rowIndex);
      var rowData = JSON.parse(params.rowData);
      
      if (isNaN(rowIndex) || rowIndex < 2) {
        throw new Error("Invalid row index for update");
      }
      
      for (var i = 0; i < rowData.length; i++) {
        if (rowData[i] !== '') {
          sheet.getRange(rowIndex, i + 1).setValue(rowData[i]);
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "Data updated successfully"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    else if (action === 'updateCell') {
      var rowIndex = parseInt(params.rowIndex);
      var columnIndex = parseInt(params.columnIndex);
      var value = params.value;
      
      if (isNaN(rowIndex) || rowIndex < 1 || isNaN(columnIndex) || columnIndex < 1) {
        throw new Error("Invalid row or column index for update");
      }
      
      sheet.getRange(rowIndex, columnIndex).setValue(value);
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "Cell updated successfully"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    else if (action === 'delete') {
      var rowIndex = parseInt(params.rowIndex);
      
      if (isNaN(rowIndex) || rowIndex < 2) {
        throw new Error("Invalid row index for delete");
      }
      
      sheet.deleteRow(rowIndex);
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "Row deleted successfully"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    else if (action === 'markDeleted') {
      var rowIndex = parseInt(params.rowIndex);
      var columnIndex = parseInt(params.columnIndex);
      var value = params.value || 'Yes';
      
      if (isNaN(rowIndex) || rowIndex < 2) {
        throw new Error("Invalid row index for marking as deleted");
      }
      if (isNaN(columnIndex) || columnIndex < 1) {
        throw new Error("Invalid column index for marking as deleted");
      }
      
      sheet.getRange(rowIndex, columnIndex).setValue(value);
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "Row marked as deleted successfully"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    else if (action === 'insertMedicineBatch') {
      if (!params.batchData) {
        throw new Error("batchData parameter is required for insertMedicineBatch action");
      }
      
      var batchData = JSON.parse(params.batchData);
      return ContentService.createTextOutput(JSON.stringify(
        insertBatchData(sheet, batchData)
      )).setMimeType(ContentService.MimeType.JSON);
    }
    else if (action === 'submitRegistration') {
      console.log('=== Processing submitRegistration ===');
      console.log('Sheet name:', sheetName);
      console.log('Sheet object:', sheet ? 'Found' : 'NOT FOUND');
      
      // Handle registration form submission - match exact sheet headers
      // Expected header order:
      // Timestamp | Your Name | Email Address | Phone Number | program interest | add info
      var formData = {
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        yourName: params.name || '',
        emailAddress: params.email || '',
        phoneNumber: params.phone || '',
        programInterest: params.program || '',
        addInfo: params.message || ''
      };
      
      console.log('Form data prepared:', JSON.stringify(formData, null, 2));
      
      // Row data matching your sheet columns: Timestamp, Your Name, Email Address, Phone Number, program interest, add info
      var rowData = [
        formData.timestamp,
        formData.yourName,
        formData.emailAddress,
        formData.phoneNumber,
        formData.programInterest,
        formData.addInfo
      ];
      
      console.log('Row data to append:', JSON.stringify(rowData));
      
      try {
        sheet.appendRow(rowData);
        console.log('Row appended successfully');
        
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          message: "Registration submitted successfully"
        })).setMimeType(ContentService.MimeType.JSON);
      } catch (appendError) {
        console.error('Error appending row:', appendError);
        throw new Error('Failed to append data to sheet: ' + appendError.toString());
      }
    }
    else if (action === 'submitContact') {
      console.log('=== Processing submitContact ===');
      console.log('Sheet name:', sheetName);
      console.log('Sheet object:', sheet ? 'Found' : 'NOT FOUND');
      
      // Contect sheet header order:
      // Your Name | email | Phone Number | Program Interest | add info
      var formData = {
        yourName: params.name || '',
        emailAddress: params.email || '',
        phoneNumber: params.phone || '',
        programInterest: params.program || params.subject || '',
        addInfo: params.message || ''
      };
      
      console.log('Contact form data prepared:', JSON.stringify(formData, null, 2));
      
      var rowData = [
        formData.yourName,
        formData.emailAddress,
        formData.phoneNumber,
        formData.programInterest,
        formData.addInfo
      ];
      
      console.log('Contact row data to append:', JSON.stringify(rowData));
      
      try {
        sheet.appendRow(rowData);
        console.log('Contact row appended successfully');
        
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          message: "Contact message submitted successfully"
        })).setMimeType(ContentService.MimeType.JSON);
      } catch (appendError) {
        console.error('Error appending contact row:', appendError);
        throw new Error('Failed to append contact data to sheet: ' + appendError.toString());
      }
    }
    else {
      console.error("Unknown action received:", action);
      console.error("Available actions: insert, update, updateCell, delete, markDeleted, insertMedicineBatch, submitRegistration, submitContact");
      throw new Error("Unknown action: " + action);
    }
  } catch (error) {
    console.error("Error in doPost:", error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleFileUpload(e) {
  try {
    console.log('handleFileUpload called');
    var params = e.parameter;
    console.log('File upload params:', {
      hasBase64Data: !!params.base64Data,
      fileName: params.fileName,
      mimeType: params.mimeType,
      folderId: params.folderId
    });
    
    if (!params.base64Data || !params.fileName || !params.mimeType || !params.folderId) {
      throw new Error("Missing required parameters for file upload. Required: base64Data, fileName, mimeType, folderId");
    }
    
    var fileUrl = uploadFileToDrive(params.base64Data, params.fileName, params.mimeType, params.folderId);
    if (!fileUrl) {
      throw new Error("Failed to upload file to Google Drive");
    }
    
    console.log('File uploaded successfully:', fileUrl);
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      fileUrl: fileUrl,
      message: "File uploaded successfully"
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error in handleFileUpload:", error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function uploadFileToDrive(base64Data, fileName, mimeType, folderId) {
  try {
    console.log('uploadFileToDrive called with:', {
      fileName: fileName,
      mimeType: mimeType,
      folderId: folderId,
      base64DataLength: base64Data ? base64Data.length : 0
    });
    
    let fileData = base64Data;
    if (base64Data.indexOf('base64,') !== -1) {
      fileData = base64Data.split('base64,')[1];
      console.log('Removed data URL prefix');
    }
    
    const decoded = Utilities.base64Decode(fileData);
    console.log('Base64 decoded, length:', decoded.length);
    
    const blob = Utilities.newBlob(decoded, mimeType, fileName);
    console.log('Blob created');
    
    const folder = DriveApp.getFolderById(folderId);
    console.log('Folder retrieved:', folder.getName());
    
    const file = folder.createFile(blob);
    console.log('File created with ID:', file.getId());
    
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    console.log('Sharing permissions set');
    
    const fileUrl = "https://drive.google.com/uc?export=view&id=" + file.getId();
    console.log('File URL generated:', fileUrl);
    
    return fileUrl;
  } catch (error) {
    console.error("Error in uploadFileToDrive:", error);
    console.error("Error details:", error.toString());
    return null;
  }
}

function getLastTaskNumber(sheet) {
  var lastRow = sheet.getLastRow();
  
  if (lastRow <= 1) {
    return 0;
  }
  
  var indentNumbers = sheet.getRange(2, 2, lastRow - 1, 1).getDisplayValues();
  var maxNumber = 0;
  
  for (var i = 0; i < indentNumbers.length; i++) {
    var cellValue = indentNumbers[i][0];
    if (cellValue && cellValue.toString().startsWith("IN-")) {
      var numPart = cellValue.toString().replace('IN-', '');
      var num = parseInt(numPart);
      if (!isNaN(num) && num > maxNumber) {
        maxNumber = num;
      }
    }
  }
  
  return maxNumber;
}

function insertBatchData(sheet, data) {
  var lastTaskNumber = getLastTaskNumber(sheet);
  var rowsData = [];
  
  // Determine request type
  var requestType = "";
  if (data.requestTypes) {
    if (data.requestTypes.medicineSlip) requestType = "medicineSlip";
    else if (data.requestTypes.investigation) requestType = "investigation";
    else if (data.requestTypes.nonPackage) requestType = "nonPackage";
    else if (data.requestTypes.package) requestType = "package";
  }
  
  for (var i = 0; i < data.medicines.length; i++) {
    var taskNumber = "IN-" + String(lastTaskNumber + i + 1).padStart(3, '0');
    
    var rowData = [
      data.timestamp,
      taskNumber,
      data.indentNumber,
      data.admissionNumber,
      data.staffName,
      data.consultantName,
      data.patientName,
      data.uhidNumber,
      data.age,
      data.gender,
      data.diagnosis,
      data.wardLocation,
      data.category,
      data.room,
      requestType,
      data.medicines[i].name,
      data.medicines[i].quantity,
    ];
    
    rowsData.push(rowData);
  }
  
  var startRow = sheet.getLastRow() + 1;
  var numRows = rowsData.length;
  var numCols = rowsData[0].length;
  
  var range = sheet.getRange(startRow, 1, numRows, numCols);
  range.setValues(rowsData);
  
  return {
    success: true,
    message: 'Batch inserted ' + numRows + ' rows successfully',
    rowsInserted: numRows,
    startRow: startRow,
    lastTaskNumber: lastTaskNumber + numRows
  };
}

function doOptions(e) {
  var response = ContentService.createTextOutput('');
  return setCorsHeaders(response);
}

function setCorsHeaders(response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}
