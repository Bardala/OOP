// One proposal here is to use what we call the parametric Singleton pattern, where instead 
// of keeping a sole instance for the Singleton, you keep multiple ones cached by a key. You 
// want to generate a unique key based on the parameters supplied in the getInstance
// method. Therefore, when passing two different parameters it should return a different 
// object, and passing the same one will return the same object

export class ParametricSingleton {
    private param: string
    private static instances: Map<string, ParametricSingleton>

    private constructor(param: string) {
        this.param = param
    }

    static getInstance(param: string) {
        if (!ParametricSingleton.instances.has(param)) {
            ParametricSingleton.instances.set(param, new ParametricSingleton(param))
        }
        return ParametricSingleton.instances.get(param)
    }
}