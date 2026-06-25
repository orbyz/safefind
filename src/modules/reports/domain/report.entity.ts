import { REPORT_STATUS } from "@/modules/shared/constants";
import type { ReportProps } from "./report.types";

export class Report {
  constructor(private props: ReportProps) {}

  get data() {
    return this.props;
  }

  verify() {
    this.props.status = REPORT_STATUS.VERIFIED;
  }

  markAsFound() {
    this.props.status = REPORT_STATUS.FOUND;
  }

  close() {
    this.props.status = REPORT_STATUS.CLOSED;
  }
}
