const employee={
    ename:"Yashi Rastogi",
    eage:"27",
    eaddress:"GN",
    planguage:[{
        lang1:"java",
        lang2:"Python"
    },
    {
        database1:"Oracle",
        database2:"MySql"
    },
    {
        framework1:"Hibernate",
        framework2:"Spring"
    }
]
}
employee.company="Infosys"
console.log(employee);
employee.planguage[1].database1="MongoDB";
console.log(employee);