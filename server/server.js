import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(express.json())
app.use(cors());




const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'Zana1954',
    database: "MediFill"
})

db.connect((err) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("Connected")

})

//get doctor table
app.get('/DoctorInformation',(req,res) => {
    const sql = "SELECT * FROM `Doctor` LIMIT 100";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

//get all patients 
app.get('/PatientInformation',(req,res) => {
    const sql = "SELECT * FROM `Patient` LIMIT 100";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
//get preciption information
app.get('/PrescriptionInformation',(req,res) => {
    const sql = "SELECT * FROM `Prescription` LIMIT 100"
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
//get pharamacy information
app.get('/PharmacyInfo',(req,res) => {
    const sql = "SELECT * FROM Pharmacy LIMIT 100"

    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})

//get specfic patient 
app.get('/searchPatient',(req,res) => {
    const Patient_ID = req.body.Patient_ID

    const sql =   `SELECT * FROM Patient WHERE Patient_ID = ? `;
    db.query(sql,Patient_ID,(err,data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting patient into database.");
        } else {
            res.status(200).send("Patient added successfully.");
        }
    })
})


//get the Pharmacist information 
app.get('/PharmacistInformation',(req,res) => {
    const sql = "SELECT * FROM `Pharmacist` LIMIT 100";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})


// add patient
app.post('/addPatient',(req,res) => {
    

    const sql = "INSERT INTO `Patient` (`Patient_ID`,`Patient_Address`,`Patient_First_Name`,`Patient_Last_Name`,`Doctor_ID`) VALUES (?,?,?,?,?) ";

    const values = [
        req.body.Patient_ID,
        req.body.Patient_Address,
        req.body.Patient_First_Name,
        req.body.Patient_Last_Name,
        req.body.Doctor_ID
    ]
    db.query(sql,values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting patient into database.");
        } else {
            res.status(200).send("Patient added successfully.");
        }
    });
});

// add prescription
app.post("/addPrescription",(req,res) => {
    const sql = "INSERT INTO `Prescription` (`Prescription_ID`,`Expiration`,`Num_Refills`,`Prescription_Quantity`,`Prescription_Name`,`Patient_ID`) VALUES (?,?,?,?,?,?)";

    const values = [
        req.body.Prescription_ID,
        req.body.Expiration,
        req.body.Num_Refills,
        req.body.Prescription_Quantity,
        req.body.Prescription_Name,
        req.body.Patient_ID
    ]

    db.query(sql,values,(err,result) => {
        if(err){
            console.log(err);
            res.status(500).send("Error inserting prescip")
        }else{
            res.status(200).send('succesfully added')
        }
    });
});

//add pharmacy
app.post("/addPharmacy",(req,res) => {
    const sql = "INSERT INTO `Pharmacy` (`Pharmacy_ID`,`Pharmacy_Name`,`Pharmacy_Address`,`Pharmacy_Hours`) VALUES (?,?,?,?)";

    const values = [
        req.body.Pharmacy_ID,
        req.body.Pharmacy_Name,
        req.body.Pharmacy_Address,
        req.body.Pharmacy_Hours,
    ]

    db.query(sql,values,(err,result) => {
        if(err){
            console.log(err);
            res.status(500).send("Error inserting prescip")
        }else{
            res.status(200).send('succesfully added')
        }
    });
});






app.listen(8081,() => {
    console.log("Listening")
})