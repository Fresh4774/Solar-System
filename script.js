var script = {
	data() {
		return {
			mode: null,
			modes: ["WIDTH", "SPEED", "DISTANCE"],
			speedRatio: 50,
			speedReal: false,
			sun: {
				diameter: "1392",
				colors: ["gold", "orange"]
			},
			selectedPlanetId: 3,
			planetsFilteredLength: 0,
			planets: [
				{
					name: "mercury",
					diameter: "4.7428794",
					rotationTime: "87.969",
					ua: "0.47",
					colors: ["gold", "darkBlue"]
				},
				{
					name: "venus",
					diameter: "12.104",
					rotationTime: "224.701",
					ua: "0.7",
					colors: ["forestgreen", "springGreen"]
				},
				{
					name: "earth",
					diameter: "12.742",
					rotationTime: "365.256",
					ua: "1",
					colors: ["white", "blue"],
					backgroundUrl:
						"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d358ffa-5177-4b84-963f-9a1957b5a8d0/d8vp0fw-994cd783-be4b-46d3-86a8-2a30d4791003.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMzU4ZmZhLTUxNzctNGI4NC05NjNmLTlhMTk1N2I1YThkMFwvZDh2cDBmdy05OTRjZDc4My1iZTRiLTQ2ZDMtODZhOC0yYTMwZDQ3OTEwMDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0DhwRtmDbKrm-cI67M7nD6zVeH6xKg1nbgFZlUSDs5s",
					satellites: [
						{
							name: "moon",
							diameter: "3.4742",
							rotationTime: "29.53",
							colors: ["white", "grey"]
						}
					]
				},
				{
					name: "mars",
					diameter: "6.779",
					rotationTime: "686.980",
					ua: "1.666",
					colors: ["darkred", "red"]
				},
				{
					name: "jupiter",
					diameter: "139.82",
					rotationTime: "4332.6",
					ua: "5.2",
					colors: ["#876f51", "#9c661f"],
					satellites: [
						{
							name: "europe",
							diameter: "3.1216",
							rotationTime: "3.551",
							colors: ["brown", "pink"]
						},
						{
							name: "ganymede",
							diameter: "5.2644",
							rotationTime: "7.15",
							colors: ["blue", "cyan"]
						},
						{
							name: "callisto",
							diameter: "4.8206",
							rotationTime: "16.689",
							colors: ["orange", "grey"]
						}
					]
				},
				{
					name: "Saturn",
					diameter: "116.46",
					rotationTime: "10759.2",
					ua: "9.5",
					colors: ["#b09f74", "#b8902a"],
					satellites: [
						{
							name: "Thétys",
							diameter: "1.066",
							rotationTime: "1.89",
							colors: ["white", "grey"]
						},
						{
							name: "Dioné",
							diameter: "1.1234",
							rotationTime: "2.74",
							colors: ["white", "white"]
						},
						{
							name: "Rhéa",
							diameter: "1.5286",
							rotationTime: "4.52",
							colors: ["white", "grey"]
						},
						{
							name: "Titan",
							diameter: "5.1495",
							rotationTime: "15.95",
							colors: ["gold", "white"]
						},
						{
							name: "Japet",
							diameter: "1.4712",
							rotationTime: "79.33",
							colors: ["springGreen", "cyan"]
						}
					]
				},
				{
					name: "uranus",
					diameter: "50.724",
					rotationTime: "30688.4",
					ua: "19.2",
					colors: ["#a3bebf", "#387a7d"],
					satellites: [
						{
							name: "titania",
							diameter: "0.7884",
							rotationTime: "8.7",
							colors: ["#387a7d", "#a3bebf"]
						}
					]
				},
				{
					name: "neptune",
					diameter: "49.244",
					rotationTime: "60181.3",
					ua: "30.1",
					colors: ["#7f8dc7", "#01146b"],
					satellites: [
						{
							name: "triton",
							diameter: "2.7068",
							rotationTime: "5.877",
							colors: ["forestgreen", "#7f8dc7"]
						},
						{
							name: "néréide",
							diameter: "0.340",
							rotationTime: "360.14",
							colors: ["#01146b", "#7f8dc7"]
						}
					]
				}
			]
		};
	},

	computed: {
		selectedPlanet() {
			return this.planets[this.selectedPlanetId];
		},
		totalPlanetsWidth() {
			let result = 0;
			for (let i = 0; i < this.planetsFiltered.length; i++) {
				result += parseFloat(this.planetsFiltered[i].diameter);
			}
			return result;
		},
		containerMargin_modeWidth() {
			return parseFloat(this.totalPlanetsWidth * 0.0075);
		},
		planetMargin_modeWidth() {
			return parseFloat(
				(this.totalPlanetsWidth / this.planetsFiltered.length) * 0.045
			);
		},
		sunWidth(index) {
			return parseFloat(
				(this.sun.diameter / this.totalPlanetsWidth) *
					(100 -
						this.containerMargin_modeWidth * 2 -
						this.planetMargin_modeWidth * 2 * this.planetsFiltered.length)
			);
		},
		planetsFiltered() {
			const result = [];
			for (let i = 0; i < this.planetsFilteredLength; i++) {
				result.push(this.planets[i]);
			}
			return result;
		}
	},

	watch: {},

	mounted() {
		this.mode = this.modes[0];
		this.planetsFilteredLength = this.planets.length;
	},

	methods: {
		switchMode(m) {
			this.mode = m;
			this.planetsFilteredLength = this.planets.length;
		},
		zoomIn() {
			if (this.planetsFilteredLength > 4) {
				this.planetsFilteredLength--;
			}
		},
		zoomOut() {
			if (this.planetsFilteredLength < this.planets.length) {
				this.planetsFilteredLength++;
			}
		},
		onClickPlanet(i) {
			console.log("onClickPlanet", i);
			this.selectedPlanetId = i;
		},
		onClickPlanetContainer(i) {
			if (this.mode !== "WIDTH") {
				console.log("onClickPlanetContainer", i);
				this.selectedPlanetId = i;
			}
		},
		parseNumeriqueSpace(value) {
			let result = "";
			value = parseInt(value);
			value = value.toString();
			for (let i = value.length - 1; i >= 0; i--) {
				result = value.charAt(i).concat(result);
				if ((value.length - i) % 3 === 0) {
					result = " ".concat(result);
				}
			}
			return result;
		},

		calcPlanetWidth_modeWidth(diameter) {
			return parseFloat(
				(parseFloat(diameter) / this.totalPlanetsWidth) *
					(100 -
						this.containerMargin_modeWidth * 2 -
						this.planetMargin_modeWidth * 2 * this.planetsFiltered.length)
			);
		},
		planetLeft_modeWidth(index) {
			let result = this.containerMargin_modeWidth + this.planetMargin_modeWidth;
			for (let i = 0; i < index; i++) {
				result +=
					this.calcPlanetWidth_modeWidth(this.planetsFiltered[i].diameter) +
					this.planetMargin_modeWidth * 2;
			}
			return result;
		},

		sunStyle() {
			let width;
			let boxShadowWidth;
			let unit;
			let right;
			const color = this.sun.colors[1];

			if (this.mode === "WIDTH") {
				width = this.sunWidth;
				boxShadowWidth = 10;
				unit = "vw";
				right = "65vw";
				boxShadowWidth = 10;
			} else if (this.mode === "SPEED") {
				width = 2.5;
				boxShadowWidth = 0.9;
				unit = "vw";
				right = `calc(50% - ${width / 2}${unit});`;
				boxShadowWidth = width / 5;
			} else if (this.mode === "DISTANCE") {
				width = 5;
				boxShadowWidth = 5;
				unit = "px";
				right = `calc(50% - ${width / 2}${unit});`;
				boxShadowWidth = width / 5;
			}
			return `
				right: ${right};
				top: calc(50% - ${width / 2}${unit});
				height: ${width}${unit};
				width: ${width}${unit};
				box-shadow: 0 0 ${boxShadowWidth}${unit} ${color};
			`;
		},

		planetContainerStyle(i) {
			let left;
			let top;
			let width;
			let height;
			let border;
			let rotationTime;
			let cursor = "auto";

			if (this.mode === "WIDTH") {
				top = "10vh";
				left = this.planetLeft_modeWidth(i) + "vw";
				width =
					this.calcPlanetWidth_modeWidth(this.planetsFiltered[i].diameter) + "vw";
				height = "80vh";
				border = "0";
				rotationTime = 0;
			} else if (this.mode === "SPEED") {
				width = (90 / (this.planetsFiltered.length + 1)) * (i + 1);
				top = `calc(50% - ${width / 2}vw - 1px)`;
				left = `calc(50% - ${width / 2}vw - 1px)`;
				width = width + "vw";
				height = width;
				border = `solid 1px ${this.planetsFiltered[i].colors[1]}`;
				rotationTime = this.planetsFiltered[i].rotationTime / this.speedRatio;
				cursor = "pointer";
			} else if (this.mode === "DISTANCE") {
				width =
					(90 / this.planetsFiltered[this.planetsFiltered.length - 1].ua) *
					this.planetsFiltered[i].ua;
				top = `calc(50% - ${width / 2}vw - 1px)`;
				left = `calc(50% - ${width / 2}vw - 1px)`;
				width = width + "vw";
				height = width;
				border = `solid 1px ${this.planetsFiltered[i].colors[1]}`;
				rotationTime = this.planetsFiltered[i].rotationTime / this.speedRatio;
				cursor = "pointer";
			}
			return `
					top: ${top};
					left: ${left};
					width: ${width};
					height: ${height};
					border: ${border};
					animation: gravitation ${rotationTime}s linear infinite;
					z-index: ${this.planets.length - i};
					cursor: ${cursor};
				`;
		},

		planetStyle(index) {
			let right;
			let width;
			let boxshadowWidth;
			let unit;
			let backgroundImage = "";

			if (this.mode === "WIDTH") {
				width = this.calcPlanetWidth_modeWidth(
					this.planetsFiltered[index].diameter
				);
				boxshadowWidth = 1.65;
				unit = "vw";
				right = `calc(50% - ${width / 2}${unit})`;
			} else if (this.mode === "SPEED") {
				width = 2.5;
				boxshadowWidth = 0.9;
				unit = "vw";
				right = `-${width / 2}${unit}`;
			} else if (this.mode === "DISTANCE") {
				width = 4;
				boxshadowWidth = 2;
				unit = "px";
				right = `-${width / 2}${unit}`;
			}
			const color1 = this.planetsFiltered[index].colors[0];
			const color2 = this.planetsFiltered[index].colors[1];
			if (this.planetsFiltered[index].backgroundUrl) {
				backgroundImage = `
					background-position: center;
					background-repeat-style: no-repeat;
					background-size: ${width * 1.2}${unit};
					background-image: url(${this.planetsFiltered[index].backgroundUrl});
				`;
			}
			return (
				`
				top: calc(50% - ${width / 2}${unit});
				right: ${right};
				height: ${width}${unit};
				width: ${width}${unit};
				background: radial-gradient(circle at ${width / 3}${unit} ${
					width / 3
				}${unit}, ${color1}, ${color2});
				box-shadow: 0 0 ${boxshadowWidth}${unit} ${color2};
			` + backgroundImage
			);
		},

		satelliteContainerStyle(i, j) {
			if (
				this.planetsFiltered[i]?.satellites &&
				this.planetsFiltered[i].satellites.length > 0 &&
				this.planetsFiltered[i].satellites[j]
			) {
				let width;
				let unit;
				let color;
				let animationTime;
				let animationDelay;
				const satellite = this.planetsFiltered[i].satellites[j];

				if (this.mode === "WIDTH") {
					width =
						this.calcPlanetWidth_modeWidth(this.planetsFiltered[i].diameter) +
						1.5 +
						1.5 * j;
					unit = "vw";
					color = satellite.colors[1];
					if (this.speedReal) {
						animationTime = satellite.rotationTime / this.speedRatio;
						animationDelay = 0;
					} else {
						animationTime = 5 * (j + 1);
						animationDelay = 5 * j;
					}
				} else if (this.mode === "SPEED") {
					width = 2.5 + 1 + 1 * j;
					unit = "vw";
					color = satellite.colors[1];
					animationTime = satellite.rotationTime / this.speedRatio;
					animationDelay = 0;
				} else if (this.mode === "DISTANCE") {
					width = 0;
					unit = "px";
					color = "transparent";
					animationTime = satellite.rotationTime / this.speedRatio;
					animationDelay = 0;
				}
				return `
					top: calc(50% - ${width / 2}${unit});
					left: calc(50% - ${width / 2}${unit});
					width: ${width}${unit};
					height: ${width}${unit};
					border-color: transparent transparent transparent ${color};
					animation: gravitation ${animationTime}s linear infinite;
					animation-delay: -${animationDelay}s;
					`;
			}
		},

		satelliteStyle(i, j) {
			if (
				this.planetsFiltered[i]?.satellites &&
				this.planetsFiltered[i].satellites.length > 0 &&
				this.planetsFiltered[i].satellites[j]
			) {
				const satellite = this.planetsFiltered[i].satellites[j];
				let width;
				let boxshadowWidth;
				let unit;
				let color1;
				let color2;
				if (this.mode === "WIDTH") {
					width = this.calcPlanetWidth_modeWidth(satellite.diameter);
					boxshadowWidth = width * 0.1;
					unit = "vw";
					color1 = satellite.colors[0];
					color2 = satellite.colors[1];
				} else if (this.mode === "SPEED") {
					width = 5;
					boxshadowWidth = 3;
					unit = "px";
					color1 = satellite.colors[0];
					color2 = satellite.colors[1];
				} else if (this.mode === "DISTANCE") {
					width = 0;
					boxshadowWidth = 0;
					unit = "px";
					color1 = "transparent";
					color2 = "transparent";
				}
				return `
					top: calc(14.5% - ${width / 2}${unit});
					left: calc(14.5% - ${width / 2}${unit});
					height: ${width}${unit};
					width: ${width}${unit};
					background: radial-gradient(circle at ${width / 3}${unit} ${
					width / 3
				}${unit}, ${color1}, ${color2});
					box-shadow: 0 0 ${boxshadowWidth}${unit} ${color2};
				`;
			}
		}
	}
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    const options = typeof script === 'function' ? script.options : script;
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        hook = function (context) {
            context =
                context ||
                    (this.$vnode && this.$vnode.ssrContext) || 
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); 
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

const __vue_script__ = script;

var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("div", { staticClass: "sun", style: _vm.sunStyle() }),
      _vm._v(" "),
      _vm._l(_vm.planetsFiltered, function(p, i) {
        return _c(
          "div",
          {
            staticClass: "planet_container",
            class: "planet_container-" + _vm.mode,
            style: _vm.planetContainerStyle(i),
            on: {
              click: function($event) {
                return _vm.onClickPlanetContainer(i)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "planet",
                class: "planet-" + _vm.mode,
                style: _vm.planetStyle(i),
                on: {
                  click: function($event) {
                    return _vm.onClickPlanet(i)
                  }
                }
              },
              _vm._l(p.satellites, function(s, j) {
                return _c(
                  "div",
                  {
                    staticClass: "satellite_container",
                    style: _vm.satelliteContainerStyle(i, j)
                  },
                  [
                    _c("div", {
                      staticClass: "satellite",
                      style: _vm.satelliteStyle(i, j)
                    })
                  ]
                )
              }),
              0
            )
          ]
        )
      }),
      _vm._v(" "),
      _c("div", { staticClass: "information-container" }, [
        _c("p", { staticClass: "name" }, [
          _vm._v(_vm._s(_vm.selectedPlanet.name))
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n\t\t\tDiameter : " +
              _vm._s(
                _vm.parseNumeriqueSpace(_vm.selectedPlanet.diameter * 1000)
              ) +
              " km\n\t\t"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n\t\t\tRevolution : " +
              _vm._s(_vm.parseNumeriqueSpace(_vm.selectedPlanet.rotationTime)) +
              " days\n\t\t"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Sun Distance : " +
              _vm._s(_vm.parseNumeriqueSpace(_vm.selectedPlanet.ua * 150)) +
              " Mkm"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "action-container" }, [
        _c(
          "div",
          _vm._l(_vm.modes, function(m) {
            return _c("span", [
              _c(
                "button",
                {
                  attrs: { disabled: m === _vm.mode },
                  on: {
                    click: function($event) {
                      return _vm.switchMode(m)
                    }
                  }
                },
                [_vm._v(_vm._s(m))]
              )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _vm.mode !== "WIDTH" || _vm.speedReal
          ? _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.speedRatio,
                    expression: "speedRatio"
                  }
                ],
                attrs: { type: "range", step: "1", min: "1", max: "1000" },
                domProps: { value: _vm.speedRatio },
                on: {
                  __r: function($event) {
                    _vm.speedRatio = $event.target.value;
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.speedRatio,
                    expression: "speedRatio"
                  }
                ],
                attrs: { type: "number", step: "1", min: "1", max: "1000" },
                domProps: { value: _vm.speedRatio },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.speedRatio = $event.target.value;
                  }
                }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("days / second")])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _vm.mode === "WIDTH"
            ? _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      _vm.speedReal = !_vm.speedReal;
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t" +
                      _vm._s(_vm.speedReal ? "Speed Real" : "Speed Fake") +
                      "\n\t\t\t"
                  )
                ]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.mode === "DISTANCE"
          ? _c("div", [
              _c(
                "button",
                {
                  attrs: { disabled: _vm.planetsFilteredLength <= 4 },
                  on: { click: _vm.zoomIn }
                },
                [_vm._v("\n\t\t\t\tZoom IN\n\t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  attrs: {
                    disabled: _vm.planetsFilteredLength >= _vm.planets.length
                  },
                  on: { click: _vm.zoomOut }
                },
                [_vm._v("\n\t\t\t\tZoom OUT\n\t\t\t")]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._m(0)
    ],
    2
  )
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c
  }
];
__vue_render__._withStripped = true;

  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-5977aa0e_0", { source: "body {\n  overflow: hidden;\n  background: black;\n}\n.planet_container,\n.planet,\n.satellite_container,\n.satellite,\n.sun {\n  transition: all ease 2s;\n}\n.sun {\n  position: absolute;\n  border-radius: 50%;\n}\n.planet_container {\n  position: absolute;\n  border-radius: 50%;\n  transform-origin: center;\n}\n.planet_container .planet {\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n}\n.planet_container .planet .satellite_container {\n  position: absolute;\n  border: solid;\n  border-width: 1px 0 0 1px;\n  border-radius: 50%;\n}\n.planet_container .planet .satellite_container .satellite {\n  position: absolute;\n  border-radius: 50%;\n}\n.planet_container-SPEED,\n.planet_container-DISTANCE {\n  transition: all ease 2s, box-shadow ease 0.6s;\n}\n.planet_container-SPEED:hover,\n.planet_container-DISTANCE:hover {\n  box-shadow: 0 0 25px white !important;\n}\n.planet_container-SPEED:hover .planet,\n.planet_container-DISTANCE:hover .planet {\n  box-shadow: 0 0 25px white !important;\n}\n.planet-WIDTH {\n  transition: all ease 2s, box-shadow ease 0.6s;\n}\n.planet-WIDTH:hover {\n  box-shadow: 0 0 25px white !important;\n}\n.action-container {\n  z-index: 999;\n  position: absolute;\n  color: white;\n}\n.action-container div {\n  margin-top: 10px;\n}\n.action-container button {\n  padding: 10px 15px;\n  margin-left: 10px;\n}\n.action-container input {\n  margin-left: 13px;\n}\n.action-container input[type=number] {\n  width: 50px;\n}\n.information-container {\n  z-index: 999;\n  position: absolute;\n  color: white;\n  right: 15px;\n  bottom: 15px;\n  border: solid 1px grey;\n  border-radius: 15px;\n  padding: 0 20px 10px 20px;\n  font-size: 14px;\n}\n.information-container .name {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.4rem;\n}\n@keyframes gravitation {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.author-container {\n  position: absolute;\n  width: 50%;\n  left: 21px;\n  bottom: 21px;\n}\n.author-container .picture {\n  position: absolute;\n  top: -42px;\n  margin-top: -12px;\n  width: 42px;\n  height: 42px;\n  background-size: 42px;\n  background-position: center;\n  background-repeat-style: \"no-repeat\";\n  background-image: url(https://assets.codepen.io/595576/internal/avatars/users/default.png?format=auto&version=1689877807&width=80&height=80);\n}\n.author-container .title {\n  font-size: 16px;\n  letter-spacing: 2px;\n  color: white;\n}\n\n/*# sourceMappingURL=pen.vue.map */", map: {"version":3,"sources":["/tmp/codepen/vuejs/src/pen.vue","pen.vue"],"names":[],"mappings":"AA8kBA;EACA,gBAAA;EACA,iBAAA;AC7kBA;ADglBA;;;;;EAKA,uBAAA;AC7kBA;AD+kBA;EACA,kBAAA;EACA,kBAAA;AC5kBA;AD8kBA;EACA,kBAAA;EACA,kBAAA;EACA,wBAAA;AC3kBA;AD6kBA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;AC3kBA;AD6kBA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;AC3kBA;AD4kBA;EACA,kBAAA;EACA,kBAAA;AC1kBA;ADglBA;;EAEA,6CAAA;AC7kBA;AD8kBA;;EACA,qCAAA;AC3kBA;AD4kBA;;EACA,qCAAA;ACzkBA;AD8kBA;EACA,6CAAA;AC3kBA;AD4kBA;EACA,qCAAA;AC1kBA;AD8kBA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;AC3kBA;AD6kBA;EACA,gBAAA;AC3kBA;AD8kBA;EACA,kBAAA;EACA,iBAAA;AC5kBA;AD8kBA;EACA,iBAAA;AC5kBA;AD6kBA;EACA,WAAA;AC3kBA;ADglBA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;AC7kBA;AD+kBA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;AC7kBA;ADglBA;AACA;IACA,uBAAA;AC7kBE;AD+kBF;IACA,yBAAA;AC7kBE;AACF;ADglBA;EAEA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;AC/kBA;ADglBA;EACA,kBAAA;EACA,UAAA;EACA,iBAAA;EACA,WATA;EAUA,YAVA;EAWA,qBAXA;EAYA,2BAAA;EACA,oCAAA;EACA,4IAAA;AC9kBA;ADglBA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;AC9kBA;;AAEA,kCAAkC","file":"pen.vue","sourcesContent":["<template>\n\t<div id=\"app\">\n\t\t<!-- MAIN CONTENT  -->\n\t\t<div class=\"sun\" :style=\"sunStyle()\"></div>\n\t\t<div\n\t\t\tclass=\"planet_container\"\n\t\t\t:class=\"`planet_container-${mode}`\"\n\t\t\tv-for=\"(p, i) in planetsFiltered\"\n\t\t\t:style=\"planetContainerStyle(i)\"\n\t\t\t@click=\"onClickPlanetContainer(i)\"\n\t\t>\n\t\t\t<div\n\t\t\t\tclass=\"planet\"\n\t\t\t\t:class=\"`planet-${mode}`\"\n\t\t\t\t:style=\"planetStyle(i)\"\n\t\t\t\t@click=\"onClickPlanet(i)\"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\tclass=\"satellite_container\"\n\t\t\t\t\tv-for=\"(s, j) in p.satellites\"\n\t\t\t\t\t:style=\"satelliteContainerStyle(i, j)\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"satellite\" :style=\"satelliteStyle(i, j)\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- INFORMATION  -->\n\t\t<div class=\"information-container\">\n\t\t\t<p class=\"name\">{{ selectedPlanet.name }}</p>\n\t\t\t<p>\n\t\t\t\tDiameter : {{ parseNumeriqueSpace(selectedPlanet.diameter * 1000) }} km\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tRevolution : {{ parseNumeriqueSpace(selectedPlanet.rotationTime) }} days\n\t\t\t</p>\n\t\t\t<p>Sun Distance : {{ parseNumeriqueSpace(selectedPlanet.ua * 150) }} Mkm</p>\n\t\t</div>\n\n\t\t<!-- ACTION  -->\n\t\t<div class=\"action-container\">\n\t\t\t<div>\n\t\t\t\t<span v-for=\"m in modes\">\n\t\t\t\t\t<button :disabled=\"m === mode\" @click=\"switchMode(m)\">{{ m }}</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div v-if=\"mode !== 'WIDTH' || speedReal\">\n\t\t\t\t<input type=\"range\" step=\"1\" min=\"1\" max=\"1000\" v-model=\"speedRatio\" />\n\t\t\t\t<input type=\"number\" step=\"1\" min=\"1\" max=\"1000\" v-model=\"speedRatio\" />\n\t\t\t\t<span>days / second</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button v-if=\"mode === 'WIDTH'\" @click=\"speedReal = !speedReal\">\n\t\t\t\t\t{{ speedReal ? \"Speed Real\" : \"Speed Fake\" }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div v-if=\"mode === 'DISTANCE'\">\n\t\t\t\t<button :disabled=\"planetsFilteredLength <= 4\" @click=\"zoomIn\">\n\t\t\t\t\tZoom IN\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\t:disabled=\"planetsFilteredLength >= planets.length\"\n\t\t\t\t\t@click=\"zoomOut\"\n\t\t\t\t>\n\t\t\t\t\tZoom OUT\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- SIGNATURE  -->\n\t\t<div class=\"author-container\">\n\t\t\t<div class=\"picture\"></div>\n\t\t\t<div class=\"title\">@SylvainGarnot</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nexport default {\n\t// ##################################################\n\t// DATA #############################################\n\t// ##################################################\n\tdata() {\n\t\treturn {\n\t\t\tmode: null,\n\t\t\tmodes: [\"WIDTH\", \"SPEED\", \"DISTANCE\"],\n\t\t\tspeedRatio: 50,\n\t\t\tspeedReal: false,\n\t\t\tsun: {\n\t\t\t\tdiameter: \"1392\",\n\t\t\t\tcolors: [\"gold\", \"orange\"]\n\t\t\t},\n\t\t\tselectedPlanetId: 3,\n\t\t\tplanetsFilteredLength: 0,\n\t\t\tplanets: [\n\t\t\t\t{\n\t\t\t\t\tname: \"mercury\",\n\t\t\t\t\tdiameter: \"4.7428794\",\n\t\t\t\t\trotationTime: \"87.969\",\n\t\t\t\t\tua: \"0.47\",\n\t\t\t\t\tcolors: [\"gold\", \"darkBlue\"]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"venus\",\n\t\t\t\t\tdiameter: \"12.104\",\n\t\t\t\t\trotationTime: \"224.701\",\n\t\t\t\t\tua: \"0.7\",\n\t\t\t\t\tcolors: [\"forestgreen\", \"springGreen\"]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"earth\",\n\t\t\t\t\tdiameter: \"12.742\",\n\t\t\t\t\trotationTime: \"365.256\",\n\t\t\t\t\tua: \"1\",\n\t\t\t\t\tcolors: [\"white\", \"blue\"],\n\t\t\t\t\tbackgroundUrl:\n\t\t\t\t\t\t\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d358ffa-5177-4b84-963f-9a1957b5a8d0/d8vp0fw-994cd783-be4b-46d3-86a8-2a30d4791003.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMzU4ZmZhLTUxNzctNGI4NC05NjNmLTlhMTk1N2I1YThkMFwvZDh2cDBmdy05OTRjZDc4My1iZTRiLTQ2ZDMtODZhOC0yYTMwZDQ3OTEwMDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0DhwRtmDbKrm-cI67M7nD6zVeH6xKg1nbgFZlUSDs5s\",\n\t\t\t\t\tsatellites: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"moon\",\n\t\t\t\t\t\t\tdiameter: \"3.4742\",\n\t\t\t\t\t\t\trotationTime: \"29.53\",\n\t\t\t\t\t\t\tcolors: [\"white\", \"grey\"]\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"mars\",\n\t\t\t\t\tdiameter: \"6.779\",\n\t\t\t\t\trotationTime: \"686.980\",\n\t\t\t\t\tua: \"1.666\",\n\t\t\t\t\tcolors: [\"darkred\", \"red\"]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"jupiter\",\n\t\t\t\t\tdiameter: \"139.82\",\n\t\t\t\t\trotationTime: \"4332.6\",\n\t\t\t\t\tua: \"5.2\",\n\t\t\t\t\tcolors: [\"#876f51\", \"#9c661f\"],\n\t\t\t\t\tsatellites: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"europe\",\n\t\t\t\t\t\t\tdiameter: \"3.1216\",\n\t\t\t\t\t\t\trotationTime: \"3.551\",\n\t\t\t\t\t\t\tcolors: [\"brown\", \"pink\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"ganymede\",\n\t\t\t\t\t\t\tdiameter: \"5.2644\",\n\t\t\t\t\t\t\trotationTime: \"7.15\",\n\t\t\t\t\t\t\tcolors: [\"blue\", \"cyan\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"callisto\",\n\t\t\t\t\t\t\tdiameter: \"4.8206\",\n\t\t\t\t\t\t\trotationTime: \"16.689\",\n\t\t\t\t\t\t\tcolors: [\"orange\", \"grey\"]\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"Saturn\",\n\t\t\t\t\tdiameter: \"116.46\",\n\t\t\t\t\trotationTime: \"10759.2\",\n\t\t\t\t\tua: \"9.5\",\n\t\t\t\t\tcolors: [\"#b09f74\", \"#b8902a\"],\n\t\t\t\t\tsatellites: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"Thétys\",\n\t\t\t\t\t\t\tdiameter: \"1.066\",\n\t\t\t\t\t\t\trotationTime: \"1.89\",\n\t\t\t\t\t\t\tcolors: [\"white\", \"grey\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"Dioné\",\n\t\t\t\t\t\t\tdiameter: \"1.1234\",\n\t\t\t\t\t\t\trotationTime: \"2.74\",\n\t\t\t\t\t\t\tcolors: [\"white\", \"white\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"Rhéa\",\n\t\t\t\t\t\t\tdiameter: \"1.5286\",\n\t\t\t\t\t\t\trotationTime: \"4.52\",\n\t\t\t\t\t\t\tcolors: [\"white\", \"grey\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"Titan\",\n\t\t\t\t\t\t\tdiameter: \"5.1495\",\n\t\t\t\t\t\t\trotationTime: \"15.95\",\n\t\t\t\t\t\t\tcolors: [\"gold\", \"white\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"Japet\",\n\t\t\t\t\t\t\tdiameter: \"1.4712\",\n\t\t\t\t\t\t\trotationTime: \"79.33\",\n\t\t\t\t\t\t\tcolors: [\"springGreen\", \"cyan\"]\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"uranus\",\n\t\t\t\t\tdiameter: \"50.724\",\n\t\t\t\t\trotationTime: \"30688.4\",\n\t\t\t\t\tua: \"19.2\",\n\t\t\t\t\tcolors: [\"#a3bebf\", \"#387a7d\"],\n\t\t\t\t\tsatellites: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"titania\",\n\t\t\t\t\t\t\tdiameter: \"0.7884\",\n\t\t\t\t\t\t\trotationTime: \"8.7\",\n\t\t\t\t\t\t\tcolors: [\"#387a7d\", \"#a3bebf\"]\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: \"neptune\",\n\t\t\t\t\tdiameter: \"49.244\",\n\t\t\t\t\trotationTime: \"60181.3\",\n\t\t\t\t\tua: \"30.1\",\n\t\t\t\t\tcolors: [\"#7f8dc7\", \"#01146b\"],\n\t\t\t\t\tsatellites: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"triton\",\n\t\t\t\t\t\t\tdiameter: \"2.7068\",\n\t\t\t\t\t\t\trotationTime: \"5.877\",\n\t\t\t\t\t\t\tcolors: [\"forestgreen\", \"#7f8dc7\"]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tname: \"néréide\",\n\t\t\t\t\t\t\tdiameter: \"0.340\",\n\t\t\t\t\t\t\trotationTime: \"360.14\",\n\t\t\t\t\t\t\tcolors: [\"#01146b\", \"#7f8dc7\"]\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t};\n\t},\n\n\t// ##################################################\n\t// COMPUTED #########################################\n\t// ##################################################\n\tcomputed: {\n\t\tselectedPlanet() {\n\t\t\treturn this.planets[this.selectedPlanetId];\n\t\t},\n\t\ttotalPlanetsWidth() {\n\t\t\tlet result = 0;\n\t\t\tfor (let i = 0; i < this.planetsFiltered.length; i++) {\n\t\t\t\tresult += parseFloat(this.planetsFiltered[i].diameter);\n\t\t\t}\n\t\t\treturn result;\n\t\t},\n\t\tcontainerMargin_modeWidth() {\n\t\t\treturn parseFloat(this.totalPlanetsWidth * 0.0075);\n\t\t},\n\t\tplanetMargin_modeWidth() {\n\t\t\treturn parseFloat(\n\t\t\t\t(this.totalPlanetsWidth / this.planetsFiltered.length) * 0.045\n\t\t\t);\n\t\t},\n\t\tsunWidth(index) {\n\t\t\treturn parseFloat(\n\t\t\t\t(this.sun.diameter / this.totalPlanetsWidth) *\n\t\t\t\t\t(100 -\n\t\t\t\t\t\tthis.containerMargin_modeWidth * 2 -\n\t\t\t\t\t\tthis.planetMargin_modeWidth * 2 * this.planetsFiltered.length)\n\t\t\t);\n\t\t},\n\t\tplanetsFiltered() {\n\t\t\tconst result = [];\n\t\t\tfor (let i = 0; i < this.planetsFilteredLength; i++) {\n\t\t\t\tresult.push(this.planets[i]);\n\t\t\t}\n\t\t\treturn result;\n\t\t}\n\t},\n\n\t// ##################################################\n\t// WATCH ############################################\n\t// ##################################################\n\twatch: {},\n\n\t// ##################################################\n\t// MOUNTED ##########################################\n\t// ##################################################\n\tmounted() {\n\t\tthis.mode = this.modes[0];\n\t\tthis.planetsFilteredLength = this.planets.length;\n\t},\n\n\t// ##################################################\n\t// METHODS ##########################################\n\t// ##################################################\n\tmethods: {\n\t\t// ACTION ##################################################\n\t\tswitchMode(m) {\n\t\t\tthis.mode = m;\n\t\t\tthis.planetsFilteredLength = this.planets.length;\n\t\t},\n\t\tzoomIn() {\n\t\t\tif (this.planetsFilteredLength > 4) {\n\t\t\t\tthis.planetsFilteredLength--;\n\t\t\t}\n\t\t},\n\t\tzoomOut() {\n\t\t\tif (this.planetsFilteredLength < this.planets.length) {\n\t\t\t\tthis.planetsFilteredLength++;\n\t\t\t}\n\t\t},\n\t\tonClickPlanet(i) {\n\t\t\tconsole.log(\"onClickPlanet\", i);\n\t\t\tthis.selectedPlanetId = i;\n\t\t},\n\t\tonClickPlanetContainer(i) {\n\t\t\tif (this.mode !== \"WIDTH\") {\n\t\t\t\tconsole.log(\"onClickPlanetContainer\", i);\n\t\t\t\tthis.selectedPlanetId = i;\n\t\t\t}\n\t\t},\n\t\tparseNumeriqueSpace(value) {\n\t\t\tlet result = \"\";\n\t\t\tvalue = parseInt(value);\n\t\t\tvalue = value.toString();\n\t\t\tfor (let i = value.length - 1; i >= 0; i--) {\n\t\t\t\tresult = value.charAt(i).concat(result);\n\t\t\t\tif ((value.length - i) % 3 === 0) {\n\t\t\t\t\tresult = \" \".concat(result);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn result;\n\t\t},\n\n\t\t// MODE WIDTH ##################################################\n\t\tcalcPlanetWidth_modeWidth(diameter) {\n\t\t\treturn parseFloat(\n\t\t\t\t(parseFloat(diameter) / this.totalPlanetsWidth) *\n\t\t\t\t\t(100 -\n\t\t\t\t\t\tthis.containerMargin_modeWidth * 2 -\n\t\t\t\t\t\tthis.planetMargin_modeWidth * 2 * this.planetsFiltered.length)\n\t\t\t);\n\t\t},\n\t\tplanetLeft_modeWidth(index) {\n\t\t\tlet result = this.containerMargin_modeWidth + this.planetMargin_modeWidth;\n\t\t\tfor (let i = 0; i < index; i++) {\n\t\t\t\tresult +=\n\t\t\t\t\tthis.calcPlanetWidth_modeWidth(this.planetsFiltered[i].diameter) +\n\t\t\t\t\tthis.planetMargin_modeWidth * 2;\n\t\t\t}\n\t\t\treturn result;\n\t\t},\n\n\t\t// SUN ##################################################\n\t\tsunStyle() {\n\t\t\tlet width;\n\t\t\tlet boxShadowWidth;\n\t\t\tlet unit;\n\t\t\tlet right;\n\t\t\tconst color = this.sun.colors[1];\n\n\t\t\tif (this.mode === \"WIDTH\") {\n\t\t\t\twidth = this.sunWidth;\n\t\t\t\tboxShadowWidth = 10;\n\t\t\t\tunit = \"vw\";\n\t\t\t\tright = \"65vw\";\n\t\t\t\tboxShadowWidth = 10;\n\t\t\t} else if (this.mode === \"SPEED\") {\n\t\t\t\twidth = 2.5;\n\t\t\t\tboxShadowWidth = 0.9;\n\t\t\t\tunit = \"vw\";\n\t\t\t\tright = `calc(50% - ${width / 2}${unit});`;\n\t\t\t\tboxShadowWidth = width / 5;\n\t\t\t} else if (this.mode === \"DISTANCE\") {\n\t\t\t\twidth = 5;\n\t\t\t\tboxShadowWidth = 5;\n\t\t\t\tunit = \"px\";\n\t\t\t\tright = `calc(50% - ${width / 2}${unit});`;\n\t\t\t\tboxShadowWidth = width / 5;\n\t\t\t}\n\t\t\treturn `\n\t\t\t\tright: ${right};\n\t\t\t\ttop: calc(50% - ${width / 2}${unit});\n\t\t\t\theight: ${width}${unit};\n\t\t\t\twidth: ${width}${unit};\n\t\t\t\tbox-shadow: 0 0 ${boxShadowWidth}${unit} ${color};\n\t\t\t`;\n\t\t},\n\n\t\t// PLANET CONTAINER ##################################################\n\t\tplanetContainerStyle(i) {\n\t\t\tlet left;\n\t\t\tlet top;\n\t\t\tlet width;\n\t\t\tlet height;\n\t\t\tlet border;\n\t\t\tlet rotationTime;\n\t\t\tlet cursor = \"auto\";\n\n\t\t\tif (this.mode === \"WIDTH\") {\n\t\t\t\ttop = \"10vh\";\n\t\t\t\tleft = this.planetLeft_modeWidth(i) + \"vw\";\n\t\t\t\twidth =\n\t\t\t\t\tthis.calcPlanetWidth_modeWidth(this.planetsFiltered[i].diameter) + \"vw\";\n\t\t\t\theight = \"80vh\";\n\t\t\t\tborder = \"0\";\n\t\t\t\trotationTime = 0;\n\t\t\t} else if (this.mode === \"SPEED\") {\n\t\t\t\twidth = (90 / (this.planetsFiltered.length + 1)) * (i + 1);\n\t\t\t\ttop = `calc(50% - ${width / 2}vw - 1px)`;\n\t\t\t\tleft = `calc(50% - ${width / 2}vw - 1px)`;\n\t\t\t\twidth = width + \"vw\";\n\t\t\t\theight = width;\n\t\t\t\tborder = `solid 1px ${this.planetsFiltered[i].colors[1]}`;\n\t\t\t\trotationTime = this.planetsFiltered[i].rotationTime / this.speedRatio;\n\t\t\t\tcursor = \"pointer\";\n\t\t\t} else if (this.mode === \"DISTANCE\") {\n\t\t\t\twidth =\n\t\t\t\t\t(90 / this.planetsFiltered[this.planetsFiltered.length - 1].ua) *\n\t\t\t\t\tthis.planetsFiltered[i].ua;\n\t\t\t\ttop = `calc(50% - ${width / 2}vw - 1px)`;\n\t\t\t\tleft = `calc(50% - ${width / 2}vw - 1px)`;\n\t\t\t\twidth = width + \"vw\";\n\t\t\t\theight = width;\n\t\t\t\tborder = `solid 1px ${this.planetsFiltered[i].colors[1]}`;\n\t\t\t\trotationTime = this.planetsFiltered[i].rotationTime / this.speedRatio;\n\t\t\t\tcursor = \"pointer\";\n\t\t\t}\n\t\t\treturn `\n\t\t\t\t\ttop: ${top};\n\t\t\t\t\tleft: ${left};\n\t\t\t\t\twidth: ${width};\n\t\t\t\t\theight: ${height};\n\t\t\t\t\tborder: ${border};\n\t\t\t\t\tanimation: gravitation ${rotationTime}s linear infinite;\n\t\t\t\t\tz-index: ${this.planets.length - i};\n\t\t\t\t\tcursor: ${cursor};\n\t\t\t\t`;\n\t\t},\n\n\t\t// PLANET ##################################################\n\t\tplanetStyle(index) {\n\t\t\tlet right;\n\t\t\tlet width;\n\t\t\tlet boxshadowWidth;\n\t\t\tlet unit;\n\t\t\tlet backgroundImage = \"\";\n\n\t\t\tif (this.mode === \"WIDTH\") {\n\t\t\t\twidth = this.calcPlanetWidth_modeWidth(\n\t\t\t\t\tthis.planetsFiltered[index].diameter\n\t\t\t\t);\n\t\t\t\tboxshadowWidth = 1.65;\n\t\t\t\tunit = \"vw\";\n\t\t\t\tright = `calc(50% - ${width / 2}${unit})`;\n\t\t\t} else if (this.mode === \"SPEED\") {\n\t\t\t\twidth = 2.5;\n\t\t\t\tboxshadowWidth = 0.9;\n\t\t\t\tunit = \"vw\";\n\t\t\t\tright = `-${width / 2}${unit}`;\n\t\t\t} else if (this.mode === \"DISTANCE\") {\n\t\t\t\twidth = 4;\n\t\t\t\tboxshadowWidth = 2;\n\t\t\t\tunit = \"px\";\n\t\t\t\tright = `-${width / 2}${unit}`;\n\t\t\t}\n\t\t\tconst color1 = this.planetsFiltered[index].colors[0];\n\t\t\tconst color2 = this.planetsFiltered[index].colors[1];\n\t\t\tif (this.planetsFiltered[index].backgroundUrl) {\n\t\t\t\tbackgroundImage = `\n\t\t\t\t\tbackground-position: center;\n\t\t\t\t\tbackground-repeat-style: no-repeat;\n\t\t\t\t\tbackground-size: ${width * 1.2}${unit};\n\t\t\t\t\tbackground-image: url(${this.planetsFiltered[index].backgroundUrl});\n\t\t\t\t`;\n\t\t\t}\n\t\t\treturn (\n\t\t\t\t`\n\t\t\t\ttop: calc(50% - ${width / 2}${unit});\n\t\t\t\tright: ${right};\n\t\t\t\theight: ${width}${unit};\n\t\t\t\twidth: ${width}${unit};\n\t\t\t\tbackground: radial-gradient(circle at ${width / 3}${unit} ${\n\t\t\t\t\twidth / 3\n\t\t\t\t}${unit}, ${color1}, ${color2});\n\t\t\t\tbox-shadow: 0 0 ${boxshadowWidth}${unit} ${color2};\n\t\t\t` + backgroundImage\n\t\t\t);\n\t\t},\n\n\t\t// SATELLITE CONTAINER ##################################################\n\t\tsatelliteContainerStyle(i, j) {\n\t\t\tif (\n\t\t\t\tthis.planetsFiltered[i]?.satellites &&\n\t\t\t\tthis.planetsFiltered[i].satellites.length > 0 &&\n\t\t\t\tthis.planetsFiltered[i].satellites[j]\n\t\t\t) {\n\t\t\t\tlet width;\n\t\t\t\tlet unit;\n\t\t\t\tlet color;\n\t\t\t\tlet animationTime;\n\t\t\t\tlet animationDelay;\n\t\t\t\tconst satellite = this.planetsFiltered[i].satellites[j];\n\n\t\t\t\tif (this.mode === \"WIDTH\") {\n\t\t\t\t\twidth =\n\t\t\t\t\t\tthis.calcPlanetWidth_modeWidth(this.planetsFiltered[i].diameter) +\n\t\t\t\t\t\t1.5 +\n\t\t\t\t\t\t1.5 * j;\n\t\t\t\t\tunit = \"vw\";\n\t\t\t\t\tcolor = satellite.colors[1];\n\t\t\t\t\tif (this.speedReal) {\n\t\t\t\t\t\tanimationTime = satellite.rotationTime / this.speedRatio;\n\t\t\t\t\t\tanimationDelay = 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tanimationTime = 5 * (j + 1);\n\t\t\t\t\t\tanimationDelay = 5 * j;\n\t\t\t\t\t}\n\t\t\t\t} else if (this.mode === \"SPEED\") {\n\t\t\t\t\twidth = 2.5 + 1 + 1 * j;\n\t\t\t\t\tunit = \"vw\";\n\t\t\t\t\tcolor = satellite.colors[1];\n\t\t\t\t\tanimationTime = satellite.rotationTime / this.speedRatio;\n\t\t\t\t\tanimationDelay = 0;\n\t\t\t\t} else if (this.mode === \"DISTANCE\") {\n\t\t\t\t\twidth = 0;\n\t\t\t\t\tunit = \"px\";\n\t\t\t\t\tcolor = \"transparent\";\n\t\t\t\t\tanimationTime = satellite.rotationTime / this.speedRatio;\n\t\t\t\t\tanimationDelay = 0;\n\t\t\t\t}\n\t\t\t\treturn `\n\t\t\t\t\ttop: calc(50% - ${width / 2}${unit});\n\t\t\t\t\tleft: calc(50% - ${width / 2}${unit});\n\t\t\t\t\twidth: ${width}${unit};\n\t\t\t\t\theight: ${width}${unit};\n\t\t\t\t\tborder-color: transparent transparent transparent ${color};\n\t\t\t\t\tanimation: gravitation ${animationTime}s linear infinite;\n\t\t\t\t\tanimation-delay: -${animationDelay}s;\n\t\t\t\t\t`;\n\t\t\t}\n\t\t},\n\n\t\t// SATELLITE ##################################################\n\t\tsatelliteStyle(i, j) {\n\t\t\tif (\n\t\t\t\tthis.planetsFiltered[i]?.satellites &&\n\t\t\t\tthis.planetsFiltered[i].satellites.length > 0 &&\n\t\t\t\tthis.planetsFiltered[i].satellites[j]\n\t\t\t) {\n\t\t\t\tconst satellite = this.planetsFiltered[i].satellites[j];\n\t\t\t\tlet width;\n\t\t\t\tlet boxshadowWidth;\n\t\t\t\tlet unit;\n\t\t\t\tlet color1;\n\t\t\t\tlet color2;\n\t\t\t\tif (this.mode === \"WIDTH\") {\n\t\t\t\t\twidth = this.calcPlanetWidth_modeWidth(satellite.diameter);\n\t\t\t\t\tboxshadowWidth = width * 0.1;\n\t\t\t\t\tunit = \"vw\";\n\t\t\t\t\tcolor1 = satellite.colors[0];\n\t\t\t\t\tcolor2 = satellite.colors[1];\n\t\t\t\t} else if (this.mode === \"SPEED\") {\n\t\t\t\t\twidth = 5;\n\t\t\t\t\tboxshadowWidth = 3;\n\t\t\t\t\tunit = \"px\";\n\t\t\t\t\tcolor1 = satellite.colors[0];\n\t\t\t\t\tcolor2 = satellite.colors[1];\n\t\t\t\t} else if (this.mode === \"DISTANCE\") {\n\t\t\t\t\twidth = 0;\n\t\t\t\t\tboxshadowWidth = 0;\n\t\t\t\t\tunit = \"px\";\n\t\t\t\t\tcolor1 = \"transparent\";\n\t\t\t\t\tcolor2 = \"transparent\";\n\t\t\t\t}\n\t\t\t\treturn `\n\t\t\t\t\ttop: calc(14.5% - ${width / 2}${unit});\n\t\t\t\t\tleft: calc(14.5% - ${width / 2}${unit});\n\t\t\t\t\theight: ${width}${unit};\n\t\t\t\t\twidth: ${width}${unit};\n\t\t\t\t\tbackground: radial-gradient(circle at ${width / 3}${unit} ${\n\t\t\t\t\twidth / 3\n\t\t\t\t}${unit}, ${color1}, ${color2});\n\t\t\t\t\tbox-shadow: 0 0 ${boxshadowWidth}${unit} ${color2};\n\t\t\t\t`;\n\t\t\t}\n\t\t}\n\t}\n};\n</script>\n<style lang=\"scss\">\nbody {\n\toverflow: hidden;\n\tbackground: black;\n}\n\n.planet_container,\n.planet,\n.satellite_container,\n.satellite,\n.sun {\n\ttransition: all ease 2s;\n}\n.sun {\n\tposition: absolute;\n\tborder-radius: 50%;\n}\n.planet_container {\n\tposition: absolute;\n\tborder-radius: 50%;\n\ttransform-origin: center;\n\n\t.planet {\n\t\tborder-radius: 50%;\n\t\tposition: absolute;\n\t\tcursor: pointer;\n\n\t\t.satellite_container {\n\t\t\tposition: absolute;\n\t\t\tborder: solid;\n\t\t\tborder-width: 1px 0 0 1px;\n\t\t\tborder-radius: 50%;\n\t\t\t.satellite {\n\t\t\t\tposition: absolute;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.planet_container-SPEED,\n.planet_container-DISTANCE {\n\ttransition: all ease 2s, box-shadow ease 0.6s;\n\t&:hover {\n\t\tbox-shadow: 0 0 25px white !important;\n\t\t.planet {\n\t\t\tbox-shadow: 0 0 25px white !important;\n\t\t}\n\t}\n}\n\n.planet-WIDTH {\n\ttransition: all ease 2s, box-shadow ease 0.6s;\n\t&:hover {\n\t\tbox-shadow: 0 0 25px white !important;\n\t}\n}\n\n.action-container {\n\tz-index: 999;\n\tposition: absolute;\n\tcolor: white;\n\n\tdiv {\n\t\tmargin-top: 10px;\n\t}\n\n\tbutton {\n\t\tpadding: 10px 15px;\n\t\tmargin-left: 10px;\n\t}\n\tinput {\n\t\tmargin-left: 13px;\n\t\t&[type=\"number\"] {\n\t\t\twidth: 50px;\n\t\t}\n\t}\n}\n\n.information-container {\n\tz-index: 999;\n\tposition: absolute;\n\tcolor: white;\n\tright: 15px;\n\tbottom: 15px;\n\tborder: solid 1px grey;\n\tborder-radius: 15px;\n\tpadding: 0 20px 10px 20px;\n\tfont-size: 14px;\n\n\t.name {\n\t\ttext-transform: uppercase;\n\t\ttext-align: center;\n\t\tfont-size: 24px;\n\t\tfont-weight: 700;\n\t\tletter-spacing: 0.4rem;\n\t}\n}\n@keyframes gravitation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.author-container {\n\t$width: 42px;\n\tposition: absolute;\n\twidth: 50%;\n\tleft: $width/2;\n\tbottom: $width/2;\n\t.picture {\n\t\tposition: absolute;\n\t\ttop: -$width;\n\t\tmargin-top: -12px;\n\t\twidth: $width;\n\t\theight: $width;\n\t\tbackground-size: $width;\n\t\tbackground-position: center;\n\t\tbackground-repeat-style: \"no-repeat\";\n\t\tbackground-image: url(https://assets.codepen.io/595576/internal/avatars/users/default.png?format=auto&version=1689877807&width=80&height=80);\n\t}\n\t.title {\n\t\tfont-size: 16px;\n\t\tletter-spacing: 2px;\n\t\tcolor: white;\n\t}\n}\n</style>\n","body {\n  overflow: hidden;\n  background: black;\n}\n\n.planet_container,\n.planet,\n.satellite_container,\n.satellite,\n.sun {\n  transition: all ease 2s;\n}\n\n.sun {\n  position: absolute;\n  border-radius: 50%;\n}\n\n.planet_container {\n  position: absolute;\n  border-radius: 50%;\n  transform-origin: center;\n}\n.planet_container .planet {\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n}\n.planet_container .planet .satellite_container {\n  position: absolute;\n  border: solid;\n  border-width: 1px 0 0 1px;\n  border-radius: 50%;\n}\n.planet_container .planet .satellite_container .satellite {\n  position: absolute;\n  border-radius: 50%;\n}\n\n.planet_container-SPEED,\n.planet_container-DISTANCE {\n  transition: all ease 2s, box-shadow ease 0.6s;\n}\n.planet_container-SPEED:hover,\n.planet_container-DISTANCE:hover {\n  box-shadow: 0 0 25px white !important;\n}\n.planet_container-SPEED:hover .planet,\n.planet_container-DISTANCE:hover .planet {\n  box-shadow: 0 0 25px white !important;\n}\n\n.planet-WIDTH {\n  transition: all ease 2s, box-shadow ease 0.6s;\n}\n.planet-WIDTH:hover {\n  box-shadow: 0 0 25px white !important;\n}\n\n.action-container {\n  z-index: 999;\n  position: absolute;\n  color: white;\n}\n.action-container div {\n  margin-top: 10px;\n}\n.action-container button {\n  padding: 10px 15px;\n  margin-left: 10px;\n}\n.action-container input {\n  margin-left: 13px;\n}\n.action-container input[type=number] {\n  width: 50px;\n}\n\n.information-container {\n  z-index: 999;\n  position: absolute;\n  color: white;\n  right: 15px;\n  bottom: 15px;\n  border: solid 1px grey;\n  border-radius: 15px;\n  padding: 0 20px 10px 20px;\n  font-size: 14px;\n}\n.information-container .name {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.4rem;\n}\n\n@keyframes gravitation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.author-container {\n  position: absolute;\n  width: 50%;\n  left: 21px;\n  bottom: 21px;\n}\n.author-container .picture {\n  position: absolute;\n  top: -42px;\n  margin-top: -12px;\n  width: 42px;\n  height: 42px;\n  background-size: 42px;\n  background-position: center;\n  background-repeat-style: \"no-repeat\";\n  background-image: url(https://assets.codepen.io/595576/internal/avatars/users/default.png?format=auto&version=1689877807&width=80&height=80);\n}\n.author-container .title {\n  font-size: 16px;\n  letter-spacing: 2px;\n  color: white;\n}\n\n/*# sourceMappingURL=pen.vue.map */"]}, media: undefined });

  };
  const __vue_scope_id__ = undefined;
  const __vue_module_identifier__ = undefined;
  const __vue_is_functional_template__ = false;
  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export default __vue_component__;