//Square pattern
function squarePattern(n){
  for(let i=0; i < n; i++){
    console.log("*".repeat(n))
  }
}
// squarePattern(4);

//Right-Angle Triangle
function rightTriangle(n){
  for(let i=0; i<=n; i++){
    console.log("*".repeat(i))
  }
}
// rightTriangle(5)

//Inverted right-angle triangle
function invertedTriangle(n) {
  for(let i = n; i>= 1; i--){
    console.log("*".repeat(i))
  }
}
// invertedTriangle(5)

//Pyramid pattern
function pyramid(n){
  for(let i=1; i<=n; i++){
    let spaces = " ".repeat(n-i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces)
  }
}
// pyramid(4);

//Inverted Pyramid pattern
function InvertedPyramid(n){
  for(let i=n; i>= 1; i--){
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}
// InvertedPyramid(4);

//Diamond pattern
function diamond(n){
  for(let i=1; i<=n; i++){
    console.log(" ".repeat(n - i) + "*".repeat(2*i-1))
  }
  for(let i = n-1; i>=1; i--){
    console.log(" ".repeat(n -i) + "*".repeat(2*i-1))
  }
}
// diamond(3);

//Number Triangle
function numberTriangle(n){
  for(let i = 1; i <=n; i++){
    let row = ""
    for(let j=1; j<= i; j++){
      row += j;
    }
    console.log(row)
  }
}
// numberTriangle(5)

//Inverted Number Triangle
function invertedNumberTriangle(n){
  for(let i = n; i >=1; i--){
    let row = ""
    for(let j=1; j<= i; j++){
      row += j;
    }
    console.log(row)
  }
}
// invertedNumberTriangle(5);

//Pascal's Triangle (basic version)
function pascalTriangle(n){
  let arr = [];
  for(let i=0; i<n; i++){
    // arr[i] = new Array(i+1);
    arr[i] = [];
    for(let j=0; j<=i; j++){
      if(j===0 || j===i){
        arr[i][j] = 1;
      }else{
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
      }
    }
    console.log(arr[i].join(" "));
  }
}
// pascalTriangle(5);

//Checkboard Pattern
function checkerBoard(n){
  for(let i=0; i<n; i++){
    let row = "";
    for(let j=0; j<n; j++){
      // if((i+j) % 2 === 0){
      //   row += "X";
      // }else{
      //   row += "O";
      // }
      row += (i+j) % 2 === 0 ? "*": " "
    }
    console.log(row);
  }
}
checkerBoard(5);