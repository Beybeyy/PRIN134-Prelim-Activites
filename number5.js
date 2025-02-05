function calculateStudentStats(scores) {
    const mean = scores.reduce((total, score) => total + score, 0) / scores.length;

    function determineGrade(mean) {
        if (mean >= 90) return 'A';
        if (mean >= 80) return 'B';
        if (mean >= 70) return 'C';
        if (mean >= 60) return 'D';
        return 'F';
    }

    const grade = determineGrade(mean);
    const isPassed = grade !== 'F';

    console.log(`Scores: [${scores.join(',')}]. Grade average: ${mean.toFixed(1)}. Your Rating: ${grade}. You ${isPassed ? 'passed' : 'failed'}.`);

    return {
        scores,
        mean,
        grade,
        isPassed
    };
}

const testCases = [
    [85, 93, 89, 89, 85, 92, 100, 90, 80, 100],
    [80, 90, 77, 82, 68, 98, 89, 79, 93, 100],
    [70, 68, 77, 82, 68, 65, 89, 79, 93, 70],
    [56, 50, 89, 90, 75, 68, 34, 91, 19, 67],
    [10, 30, 70, 31, 90, 20, 89, 58, 67, 21]
];

testCases.forEach(scores => {
    calculateStudentStats(scores);
});
