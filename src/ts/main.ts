/*
1.Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
*/

function calculateTotalLength(jumpDistances: number[]): number {
  let totalLength = 0;

  totalLength = jumpDistances.reduce(
    (total, current) => total + current
  );

  return totalLength;
}


/*
2.I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
*/

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  // Uppdatera studentens "passed" status beroende på deras namn och om de lämnade in i tid
  if (student.name === "Sebastian") {
    if (student.handedInOnTime) {
      student.passed = true;
    } else {
      student.passed = false;
    }
  } else {
    student.passed = false;
  }

  // Returnera VG eller IG beroende på studentens "passed" status
  if (student.passed) {
    return "VG";
  } else {
    return "IG";
  }
}


  /*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

  interface Temp {
    q: string;
    where: Date;
    v: number;
  }
  
  function getAverageWeeklyTemperature(measurements: Temp[]): number {
    let averageTemp = 0;
    const weekAgo = Date.now() - 604800000;
  
    for (let index = 0; index < measurements.length; index++) {
      const measurement = measurements[index];
  
      if (measurement.q === "Stockholm" && measurement.where.getTime() > weekAgo) {
        averageTemp += measurement.v;
      }
    }
  
    return averageTemp / 7;
  }

  /*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.*/


  function showProduct(
    name: string,
    price: number,
    amount: number,
    description: string,
    images: string[],
    parent: HTMLElement
  ) {
    const container = document.createElement("div");
    container.classList.add("product-container");
  
    const title = document.createElement("h4");
    title.classList.add("product-title");
    title.innerHTML = name;
  
    const priceElement = document.createElement("strong");
    priceElement.classList.add("product-price");
    priceElement.innerHTML = `${price}`;
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("product-image-container");
  
    images.forEach((image) => {
      const imageTag = document.createElement("img");
      imageTag.classList.add("product-image");
      imageTag.src = image;
      imageContainer.appendChild(imageTag);
    });
  
    container.appendChild(title);
    container.appendChild(priceElement);
    container.appendChild(imageContainer);
    parent.appendChild(container);
  }
  

  /*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!*/
  function presentStudents(students: Student[]) {
    function createCheckbox(checked: boolean): HTMLInputElement {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = checked;
      return checkbox;
    }
  
    for (const student of students) {
      const container = document.createElement("div");
      const checkbox = createCheckbox(student.handedInOnTime);
  
      container.appendChild(checkbox);
  
      const listOfStudents = document.querySelector("ul#passedstudents");
      if (listOfStudents) {
        listOfStudents.appendChild(container);
      } else {
        const listOfStudents = document.querySelector("ul#failedstudents");
        if (listOfStudents) {
          listOfStudents.appendChild(container);
        }
      }
    }
  }

  /*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

  function concatenateStrings() {
    let strings = ["Lorem", "ipsum", "dolor", "sit", "amet"];
    return strings.join("");
  }
  
 /*
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
  Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
  fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
  lösning som är hållbar och skalar bättre. 
*/
function createUser(name: string, birthday: Date, email: string, password: string): void | string {
  const milisecPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const ageInMilliseconds = Date.now() - birthday.getTime();
  const userAge = Math.floor(ageInMilliseconds / milisecPerYear);

  if (userAge < 20) {
    return "Du är under 20 år";
  }

  // Logik för att skapa en användare
}