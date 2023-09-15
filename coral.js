let coralBranches = [];
let slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, 100, 0, 1);
    slider.position(width - 150, 20);
    slider.style('width', '100px');

    // Inicializa las ramas de coral
    for (let i = 0; i < 5; i++) {
        coralBranches.push(new CoralBranch());
    }
}

function draw() {
    background(0);

    // Actualiza y muestra las ramas de coral
    for (let branch of coralBranches) {
        branch.update();
        branch.display();
    }

    // Mueve las ramas de coral según el valor del deslizador
    let sliderValue = slider.value();
    for (let branch of coralBranches) {
        branch.move(sliderValue);
    }
}

class CoralBranch {
    constructor() {
        this.x = width / 2;
        this.y = height;
        this.segments = [];
        this.numSegments = floor(random(3, 6));

        for (let i = 0; i < this.numSegments; i++) {
            this.segments.push({
                x: this.x,
                y: this.y - i * 20,
                angle: random(TWO_PI)
            });
        }
    }

    update() {
        // Actualiza el crecimiento de la rama
    }

    display() {
        // Dibuja la rama de coral
    }

    move(sliderValue) {
        // Mueve la rama de coral según el valor del deslizador
    }
}
