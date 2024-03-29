# Java for JS-Devs Basics

https://www.youtube.com/watch?v=HZgvr6Vtu-k

stricter Typed - you have to declare the Type

```java
String firstName = "Anna";
```

semicolons = required

## Types

#### primitive types

starting with Lowercase-Letter

- ```java
  char aLetter = 'a'; // a single character in single quotes
  ```

- ```java
  boolean isLoggedIn = false;
  ```

- ```java
  int aWholeNum = 42;
  double aDecimalPointNum = 42.424242;
  ```

#### non-primitive types

= Object-Type - starting with Capital-Letter

```java
String aNewName = "Bob";
// Object-Version of the primitives: (non-primitive) - sometimes needed
Double aNewNum = 54.56;
Integer aNewWholeNum = 90;
Boolean isLoggedOut = true;
```

> try to use the primitive type, when possible

### change types:

convert type:

```java
Double anotherNum = (double) aNewWholeNum;
```

## privacy

indicate the privacy for anything inside a class -> how can you access the methods, variables

> kind of scope

```java
public String lastName = "Mustermann"; // can be accessed from outside
private String middleName = "Mustermann"; // can only be accessed inside the class
```

...other types of privacy available...

### final

= **const** -> not changeable

```java
private final String DOB = "30.10.1992"
public final String petName = "Lulu"
```

## function declarations

> JS:
>
> ```
> function myFunc() {...}
> ```

java: indicate what it is returning: `privacy - type`

```java
public String getFullName() {
  return firstName + middleName + lastName
}
```

##### void

if you don't return anything

```
private calculateInsurance
```

```java
  private void updateDBInsurancePremium (double newPremium) {
        db.update(newPremium);
  }
```

parameter also has to indicate the type

# main-funktion

`cmd-j` - shortcut

```java
 public static void main(String[] args) {

 }
```

green arrow indicates, that it can be run

# Object-Oriented OOP

a class is considered a type

you always have to create an instance

```java
public class Person {
    public String firstName;
    public String lastName;
    public String middleName;
    private int userID;

    public String getFullName() {
        return firstName + middleName + lastName
    }
}
```

```java
Person bobRoss = new Person();
```

##### static method

call without creating an instance!

```java
   public static String sayHi() {
        return "Hi";
    }

    // -> call with Person.sayHi();
```

# Constructors

> `cmd-N` shortcut generate
>
> `ctrl-P` show expected parameters

### ToString

concatinates all properties

Each class has a default toString-method. if you change it, it will display `@Override`

this will be displayed eg. for any log

```
System.out.println(bobRoss);
```

---

# Arrays

min 40

> Array Lists more similar than arrays

##### Arrays

```java
String[] names = {"Anna", "Bob", "Sandy", "Alex"};
 names[2]="John";
```

it is not possible to change the langth of an array afterwards

```
int[] ages = new int[20];
```

##### Array-Lists

```java
   ArrayList<String> students = new ArrayList<>();
        students.add("Harriet");
        students.add("Francois");
        students.add("Lauren");

        System.out.println(students);
        System.out.println(students.get(2));
```

no bracket-notation, instead `get` and `add`.

`size` instead of `length` (always when usin collections)

# Hashmaps

== JavaScript-Objects

use the non-primitive version: `Integer` instead of `int`

```java
   HashMap<String, Integer> studentAges =  new HashMap<String, Integer>();
        studentAges.put("Fred", 42);
        studentAges.put("Anna", 43);

        int fredsAge = studentAges.get("Fred");
        System.out.println(fredsAge);
```

if you need more flexibility, make a class

```java
  HashMap<Integer, Person> studentAttendance = new HashMap<Integer, Person>();

        studentAttendance.put(19204, bobRoss);
        System.out.println(studentAttendance);
```

# Enums

```java
public enum Suits {
    HEARTS("Hearts","Red"),
    DIAMONDS("Diamonds", "Red"),
    SPADES("Spades","Black"),
    CLUBS("Clubs", "Black");

    private final String displayName;
    private final String color;


    public Suits(String displayName, String color) {
        this.displayName = displayName;
        this.color = color;
    }
}
```

---

# Loops

1:02

do-while, while-do = almost identical to JS

For loops

```java
   for (int i = 0; i <= students.size(); i++) {
            System.out.println("Student # " + i);
        }
```

For each: `:` is like in/of

```java
 for(String name : names) {
            System.out.println(name);
        }
    }
```

> `sout` in IntelliJ = `System.out.println`

# Iterators

move through complex types (HashMap, ArrayList)

call the method :iterator()

```java
Iterator<String> it = students.iterator();
while (it.hasNext()) {
	System.out.println(it.next());
}
```

---

# Conditionals

```java
if( 2 == 2) {
	//
}
```

this works, but is not prefered

```java
if(bobRoss.firstName == "Bob") {
	System.out.println("Hi Bob");
}
```

better:

```java
if (bobRoss.firstName.equals("Bob")) {
	System.out.println("Hi Bob");
}
```

> you could also @override the .equals-method

---

# Console In/Out

```java
Scanner input = new Scanner(System.in);
System.out.println("Please enter yout name...");
String userName = input.nextLine();
System.out.println(userName);
```

it is always a string...

```java
System.out.println("Please enter your age...");
int userAge = input.nextInt();
System.out.println(userAge);
```
