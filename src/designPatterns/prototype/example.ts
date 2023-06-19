let x = {}
let o = Object.getPrototypeOf(x)

let User = {
    type: 'Unauthenticated',
    name: 'Theo'
}

let u = Object.create(User, { name: { value: 'Alex' } })
u.name