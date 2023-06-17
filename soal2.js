// soal no 2
// created by Argietha Septyani
// created date 17/06/2023

const productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  }

// Melakukan convert string dari ProductBin karna ada beberapa yang Int.
var string1 = JSON.stringify(productBin);
var databaru = JSON.parse(string1); 

var productQuantity = []; 
var storageIDs = []; 
var totalQuantity = 0;

// Function Array untuk ProductQuantity.
for (let i = 0; i < databaru.data.length; i++) {
    if (databaru.data[i].productCode == "FBR00040101") {
        storageIDs.push(databaru.data[i].storageId);
        productQuantity.push(databaru.data[i].quantity);
    }
}

// Function untuk total penjumlahan Quantity.
for (let i = 0; i < productQuantity.length; i++) {
    totalQuantity += productQuantity[i];
}
console.log("totalQuantity dari storageID: %s = %d",storageIDs,totalQuantity);

