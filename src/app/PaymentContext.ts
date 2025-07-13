import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  constructor(private factory: PaymentProviderFactory) {}

  processPayment(amount: number, transactionId: string): void {
    const provider = this.factory.createPaymentProvider();
    provider.authorize(amount);
    provider.capture(transactionId);
    provider.refund(transactionId);
  }
}