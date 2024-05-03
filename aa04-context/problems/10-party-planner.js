class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList
	}

	addToGuestList(name) {
		this.guestList.push(name)
		return this.guestList
	}

	throwParty() {
		if (this.guestList.length === 0) return 'Gotta add people to the guest list!'
		else return `Welcome to the party ${this.guestList.map((el, i) => i !== this.guestList.length - 1 || this.guestList.length <= 1 ? el : 'and ' + el).map((el, i) => el === this.guestList[i] && this.guestList.length > 2 ? el + ',': el).join(' ')}.`
		
	}
}
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

party.addToGuestList("David");
console.log(party.throwParty())

party.addToGuestList("Denise");
console.log(party.throwParty())

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
