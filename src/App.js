import React from 'react';

function Text(props) {
  // props matlab properties or attributes
  console.log('props', props);
  const color = props.color;
  const children = props.children;
  return <font color={color}>{children}</font>;
}
function Outline(props) {
  console.log(props);
  const style = { border: '2px dashed black', padding: 20, margin: 20 };
  return <div style={style}>{props.children}</div>;
}
export default function App() {
  return (
    <Outline>
      <Outline>
        <Text color="red">tag1 </Text>
      </Outline>
      <Outline>
        <Text color="green">tag2 </Text>
      </Outline>
      <Outline>
        <Text color="blue">tag3 </Text>
      </Outline>
      <Outline>
        <Text color="silver">tag4 </Text>
      </Outline>
    </Outline>
  );
}
