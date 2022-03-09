exports.getEmployee = async (req,res)=>{
    res.send(`get all employee`);
}

exports.getEmployeeID = async (req, res)=>{
    res.send(`get from id : ${req.params.id}`)
}

exports.getEmployeeSal = async (req, res)=>{
    const sal = req.params.sal;
    const tax = sal * 0.10;
    res.send(`get salary : ${tax}`)
}

exports.getEmployeeAge = async (req, res)=>{
    const age = req.params.age;
    const retire = 60 - age;
    res.send(`get age : ${retire}`)
}

exports.addEmployee = async (req, res)=>{
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.salary);
    res.send("add an employee");
}


