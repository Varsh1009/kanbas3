import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import Ternary from "./TernaryOperator";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from "./Highlight";
import TOC from "./TOC";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";

export default function Lab3() {
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <hr />
      <h3>Javascript Basics</h3>
      <hr />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <Ternary />
      <ConditionalOutputIfElse />
      <hr />

      <h3>Javascript Functions</h3>
      <hr />
      <LegacyFunctions />
      <ArrowFunctions />
      <TemplateLiterals />
      <hr />

      <h2>Data Structures</h2>
      <hr />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <JsonStringify />
      <House />
      <TodoItem />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <br />
      <Classes />
      <Styles />
      <hr />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <h4>Highlight</h4>
      <Highlight>
      n a small, quiet village nestled between lush green hills, the sun rose each morning with a golden glow that painted the sky in shades of pink and orange. The villagers, known for their warm smiles and hearty laughter, began their day with the scent of freshly baked bread wafting through the air. Children played in the fields, their giggles mingling with the sweet melody of birds chirping in the trees. As the day unfolded, stories of old echoed in the town square, where elders shared tales of adventure and wisdom, binding the community with threads of shared history and hope for the future.
      </Highlight>
      <hr />
      <TOC />
      <hr />
      <PathParameters />
    </div>
  );
}
