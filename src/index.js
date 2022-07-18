import initLayout from "@flourish/layout";

export const data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export const state = {
  color: "#000000",
  layout: {},
  // The current state of template. You can make some or all of the properties
  // of the state object available to the user as settings in settings.js.
};


const layout = initLayout(state.layout);

export function update() {
  // The update function is called whenever the user changes a data table or settings
  // in the visualisation editor, or when changing slides in the story editor.

  // Tip: to make your template work nicely in the story editor, ensure that all user
  // interface controls such as buttons and sliders update the state and then call update.
  
console.log(state)
}
export function draw() {
  // The draw function is called when the template first loads
  update();
  
}