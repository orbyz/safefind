import type { CaseData } from "./case.types";

export class Case {
  constructor(private readonly props: CaseData) {}

  get data() {
    return this.props;
  }
}
