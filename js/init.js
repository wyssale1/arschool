AFRAME.registerComponent("markers_start", {
    init: function () {

        let sceneEl = document.querySelector("a-scene")
        let markerEl = document.createElement("a-marker")
        markerEl.setAttribute("preset", "hero")
        markerEl.setAttribute('registerevents', '')
        markerEl.setAttribute('data-modal', 'a-to-d')
        sceneEl.appendChild(markerEl)

        let boxEl = document.createElement("a-plane")
        boxEl.setAttribute("width", "1.2")
        boxEl.setAttribute("height", "1.5")
        boxEl.setAttribute("color", "red")
        boxEl.object3D.rotation.set(-90, 0, 0)
        markerEl.appendChild(boxEl)

        let textEl = document.createElement("a-text")
        textEl.setAttribute("value", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita voluptatem eum sed, labore obcaecati delectus, dolore, magni dolor nemo recusandae. Odit laborum")
        textEl.setAttribute("width", "1")
        textEl.object3D.position.set(-0.5, -0.05, 0.1)
        boxEl.appendChild(textEl)
        
    }
})

let state = 0

AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el

        marker.addEventListener("markerFound", () => {
            if (state === 0) {
                state = 1
                frontendModul.showModal(marker.dataset.modal)
            } else {
                let plan = document.createElement('a-plane')
                plan.setAttribute('material', { color: 'white' })
                plan.object3D.rotation.set(-90, 0, 0)
                marker.appendChild(plan)
            }

        })
        marker.addEventListener("markerLost", () => {
            if (state === 1) {
                state = 0
                frontendModul.removeModal()
            } else {
                if (plane = marker.querySelector("a-plane")) plane.remove()
            }
        })
    }
})

