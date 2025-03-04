# Associate-code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="profile-card">
        <img src="profile.jpg" alt="Profile Picture">
        <h2>John Doe</h2>
        <p>Software Engineer</p>
        <p>A passionate developer who loves coding.</p>
        <div class="social-icons">
            <a href="#">🔗</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
        </div>
    </div>
</body>
</html>

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.profile-card {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.profile-card:hover {
    transform: scale(1.05);
}

img {
    width: 100px;
    border-radius: 50%;
}

.social-icons a {
    margin: 5px;
    text-decoration: none;
}

import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {
    public static boolean isAnagram(String str1, String str2) {
        char[] arr1 = str1.toLowerCase().toCharArray();
        char[] arr2 = str2.toLowerCase().toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();
        scanner.close();

        System.out.println("Anagram: " + isAnagram(str1, str2));
    }
}


import java.util.ArrayList;

class Employee {
    int id;
    String name;
    double salary;

    Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1, "Alice", 50000));
        employees.add(new Employee(2, "Bob", 60000));
        employees.add(new Employee(3, "Charlie", 55000));

        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <h2>To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Enter task">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
    <script src="todo.js"></script>
</body>
</html>


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
</head>
<body>
    <div>
        <button onclick="prevImage()">Previous</button>
        <img id="slider" src="" width="300px">
        <button onclick="nextImage()">Next</button>
    </div>
    <script src="slider.js"></script>
</body>
</html>


let images = [
    "https://via.placeholder.com/300/FF5733",
    "https://via.placeholder.com/300/33FF57",
    "https://via.placeholder.com/300/3357FF"
];

let index = 0;

function showImage() {
    document.getElementById("slider").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Initialize the slider
showImage();



