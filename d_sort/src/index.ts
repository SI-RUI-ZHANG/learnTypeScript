import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -2, -20]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaaybcdalfdsafd');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(100);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-30);
linkedList.add(4);

linkedList.sort();
linkedList.print()