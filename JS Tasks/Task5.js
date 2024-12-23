function printFibonacci() {
  const steps = parseInt(document.getElementById("steps").value);
  const output = document.getElementById("output");

  if (isNaN(steps) || steps < 1) {
    output.innerText = "Please enter a number that is greater than 0.";
    return;
  }

  let a = 1,
    b = 1;
  const series = [a];

  for (let i = 1; i < steps; i++) {
    const next = a + b;
    series.push(b);
    a = b;
    b = next;
  }

  output.innerText = series.join(", ");
}
