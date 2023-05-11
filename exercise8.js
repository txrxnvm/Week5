let students = [
    {name: "Erin", scores: [100, 96, 99, 92]},
    {name: "Joe", scores: [92, 89, 96, 100, 94]},
    {name: "Tara", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Sadie", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

for(i=0;i<students.length;i++){
    s = students[i]

    let total = 0

    for(i2 = 0; i2 < s.scores.length; i2++){
        total += s.scores[i2];
    }

    const average = total / s.scores.length

    console.log("NAME: ", s.name, "AVERAGE: ", average.toFixed(2))
}