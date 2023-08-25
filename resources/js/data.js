export default new function() {
    const Static = (name, func) => {
        Object.defineProperty(this, name, {
            value: func,
            writable: false,
            configurable: false
        });
    }

    this.jsonData = {
        name: "Juan lucas",
        age: "12/07/2004",
        email: "Juanlucas@gmail.com",
    }

    Static("saludo", (nameUser) => {
        return `Hola ${nameUser}`;
    });
}