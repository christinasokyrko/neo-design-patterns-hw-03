import { PaymentContext } from "./app/PaymentContext";
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";

// Отримуємо провайдера з командного рядка
const provider = process.argv[2]?.toLowerCase() || "stripe";
const amount = 100;
const transactionId = "TX123456";

// Створюємо відповідну фабрику
let factory;

switch (provider) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
    factory = new AppleFactory();
    break;
  default:
    console.error("Unknown payment provider");
    process.exit(1);
}
// Створюємо контекст та обробляємо платіж
const context = new PaymentContext(factory);
context.processPayment(amount, transactionId);
