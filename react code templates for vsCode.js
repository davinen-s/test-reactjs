{
	/*
	// Place your snippets for JavaScript here. Each snippet is defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
*/
	"import React": {
		"prefix": "impReact",
		"body": [
			"import React from 'react';"
		],
		"description": "Generate the react import"
	},

	"import React-DOM": {
		"prefix": "impDOM",
		"body": [
			"import ReactDOM from 'react-dom';"
		],
		"description": "Generate the react-dom import"
	},

	"Class template": {
		"prefix": "classTempl",
		"body": [
			"import React from 'react';",
			" ",
			" ",
			"class ${1:className} extends React.Component {",
			"  ",
			"  constructor(){",
			"    super();",
			"  }",
			" ",
			"  /**",
			"  * render method.",
			"  */",
			"  render(){",
			"    return $2",
			"  }",
			"}"
		],
		"description": "Generate the template a react class."
	},

	"componentWillReceiveProps": {
		"prefix": "cwrp",
		"body": [
			"/**",
			"* Update state before render() is called.",
			"*/",
			"componentWillReceiveProps(nextProps){",
			"	$0",
			"}"
		],
		"description": "Generate the template for the function componentWillReceiveProps."
	},

	"shouldComponentUpdate": {
		"prefix": "scu",
		"body": [
			"/**",
			"* Define the flag that decide when component should be updated.",
			"*/",
			"shouldComponentUpdate(nextProps, nextState){",
			"  ",
		  "  return $0",
			"}"
		],
		"description": "Generate the template for the function shouldComponentUpdate."
	},

	"componentDidUpdate": {
		"prefix": "cdu",
		"body": [
			"/**",
			"* Function to execute after component has been updated.",
			"*/",
			"componentDidUpdate(prevProps, prevState){",
			"  ",
		  "  return $0",
			"}"
		],
		"description": "Generate the template for the function componentDidUpdate."
	},

	"render": {
		"prefix": "render",
		"body": [
			"/**",
			"* render method.",
			"*/",
			"render(){",
			"  return $1",
			"}"
		],
		"description": "Generate the template for the function render"
	}
}