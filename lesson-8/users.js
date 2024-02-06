// Filter
const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];

const rowEl = document.querySelector('.row')
users.forEach((user) => {
    rowEl.innerHTML += `
    <div class="col-6">
        <h1>User: ${user.username}</h1>
        <h2>Id: ${user._id}</h2>
        <h3>Qachon ro'yxatdan o'tgan: ${user.createdAt}</h3>
    </div>
    `
})