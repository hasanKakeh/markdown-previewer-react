import "./App.css";
import marked from "marked";
import parse from "html-react-parser";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";

class App extends Component {
  state = {
    editor:
      "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",
  };
  onChange(e) {
    console.log(e.currentTarget);
    this.setState({ editor: e.currentTarget.value });
  }
  render() {
    return (
      <div className="container ">
        <div className="row m-5 pl-3">
          <div class="form-group mt-3 pr-2 col-6">
            <h3>Editor</h3>
            <textarea
              onChange={(e) => this.onChange(e)}
              class="form-control"
              id="editor"
              rows="8"
              style={{ height: "100%", maxHeight: 425 }}
              value={this.state.editor}
            ></textarea>
          </div>
          <div class="form-group mt-3 pl-2 col-6">
            <h3>Previewer</h3>
            <div
              id="preview"
              class="form-control"
              contentEditable="false"
              style={{
                height: "100%",
                borderRadius: 3,
                padding: 5,
                maxHeight: 425,
                overflowY: "scroll",
                backgroundColor: "#fff",
              }}
            >
              {parse(marked(this.state.editor))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
