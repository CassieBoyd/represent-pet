// Create an object that represents your pet.

// 1. Name property with a string value.
// 2. Species property with a string value.
// 3. Nicknames property with an array value. Array contains strings.
// 4. Age property with an integer value

const Autumn = {
    species: "cat",
    nicknames: ["Bottom", "Autumn, Autumn, stinky bottom"],
    age: 17,
    meow: () => {
        console.log("meow")
    },
    purr: () => {
        console.log("purr")
    },
    hiss: () => {
        window.alert("hiss")
    }
}
Autumn.meow()
Autumn.purr()
Autumn.hiss()
