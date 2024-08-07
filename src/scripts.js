document.addEventListener("DOMContentLoaded", function() {
    const models = {
        "XZ2000": {
            name: "Retroescavadeira XZ2000",
            description: "A Retroescavadeira XZ2000 é uma máquina versátil e potente, projetada para escavações pesadas e trabalhos de construção. Equipado com tecnologia de ponta, este modelo oferece eficiência e durabilidade em qualquer tipo de terreno.",
            specifications: {
                motor: "Diesel de 150 HP",
                weight: "8.500 kg",
                bucketCapacity: "1,2 m³",
                diggingDepth: "5,5 m",
                dumpHeight: "4,2 m",
                hydraulicSystem: "Controles pilotados"
            },
            features: [
                "Cabine climatizada com visibilidade 360 graus",
                "Sistema de telemetria para monitoramento remoto",
                "Pneus reforçados para maior durabilidade",
                "Sistema de segurança com desligamento automático em caso de falha"
            ],
            parts: ["Motor de 150 HP", "Caçamba de 1,2 m³", "Braço de escavação de 5,5 m", "Pneus reforçados", "Sistema hidráulico com controles pilotados", "Cabine climatizada"]
        },
        "Model B": {
            name: "Model B",
            description: "Descrição detalhada do Model B.",
            parts: ["Peça 4", "Peça 5", "Peça 6"]
        },
        "Model C": {
            name: "Model C",
            description: "Descrição detalhada do Model C.",
            parts: ["Peça 7", "Peça 8", "Peça 9"]
        }
    };

    const modelSelect = document.getElementById("modelSelect");
    const pecasList = document.getElementById("pecasList");

    window.showModelDetails = function() {
        const selectedModel = modelSelect.value;
        console.log("Selected Model: ", selectedModel);  // Log do modelo selecionado
        pecasList.innerHTML = "";

        if (selectedModel) {
            const details = models[selectedModel];
            console.log("Model Details: ", details);  // Log dos detalhes do modelo
            const detailsHtml = `
                <h2>${details.name}</h2>
                <p>${details.description}</p>
                <h3>Especificações Técnicas:</h3>
                <ul>
                    <li>Motor: ${details.specifications.motor}</li>
                    <li>Peso Operacional: ${details.specifications.weight}</li>
                    <li>Capacidade da Caçamba: ${details.specifications.bucketCapacity}</li>
                    <li>Profundidade de Escavação: ${details.specifications.diggingDepth}</li>
                    <li>Altura de Descarga: ${details.specifications.dumpHeight}</li>
                    <li>Sistema Hidráulico: ${details.specifications.hydraulicSystem}</li>
                </ul>
                <h3>Características Adicionais:</h3>
                <ul>
                    ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <h3>Peças:</h3>
                <ul>
                    ${details.parts.map(part => `<li>${part}</li>`).join('')}
                </ul>
            `;
            pecasList.innerHTML = detailsHtml;
        }
    };
});

