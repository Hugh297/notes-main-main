const name = "Hugh";
console.log("Welcome to " + name + "'s portfolio!");
const greeting = "Hello, " + name + "! This is my JavaScript portfolio.";
console.log(greeting);
window.portfolio = {
    firstNumber: 7,
    secondNumber: 3,
    log() {
        console.log("Welcome to " + this.name + "'s portfolio!");
        console.log("Hello, " + this.name + "! This is my JavaScript portfolio.");
        console.log("sum", this.firstNumber + this.secondNumber);
        console.log("difference", this.firstNumber - this.secondNumber);
        console.log("product", this.firstNumber * this.secondNumber);
        console.log("quotient", this.firstNumber / this.secondNumber);
        console.log("remainder", this.firstNumber % this.secondNumber);
        console.log("current year:", new Date().getFullYear());
    }
};

portfolio.log();

for (let i = 1; i <= 3; i++) {
    if (i === 2) continue;
    console.log("Iteration:", i);
}

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

const score = 85;
const grade = getGrade(score);
console.log("Score:", score);
console.log("Grade:", grade);

const nums = [1, 2, 3];
nums.push(4);
nums.shift();
console.log(nums);

const projects = [
    {
        title: "Personal Portfolio",
        tech: "HTML, CSS, JavaScript",
        year: 2025,
        description: "A website showcasing projects and skills."
    },
    {
        title: "Score Calculator",
        tech: "JavaScript",
        year: 2025,
        description: "A program that converts numeric scores into letter grades."
    }
];

projects.push({
    title: "Task Tracker",
    tech: "HTML, CSS, JavaScript",
    year: 2025,
    description: "A simple app for keeping track of tasks."
});

projects.forEach(project => console.log(project.title));
console.log(JSON.stringify(projects));