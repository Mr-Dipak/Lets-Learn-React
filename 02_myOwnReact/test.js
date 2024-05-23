const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}

for (const prop in reactElement.props) {
    if(prop === "children")continue;
    else{
      console.log(prop,reactElement.props[prop])
    }
  }
