//INTERFACES FOR CLASSES

export interface INV {
  format(): string;
  amount: number;
  typeSelect: string;
}

//CLASSES
export class INVOICE implements INV {
  // readonly client: string;
  // private details: string;
  // public amount: number; //by default it is public
  // constructor(client: string, details: string, amount: number) {
  //   this.client = client;
  //   this.details = details;
  //   this.amount = amount;
  // }

  //SHORTHAND
  typeSelect: string;
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    this.typeSelect = "INVOICE";
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

export interface PERSON {
  name: string;
  age: number;
  speak(x: string): string;
  spend(a: number): string;
}

export class PAYMENT implements INV {
  typeSelect: string;
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {
    this.typeSelect = "PAYMENT";
  }
  format() {
    return `${this.recipient} owes $${this.amount} for ${this.details}`;
  }
}
