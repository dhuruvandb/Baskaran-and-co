import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Title } = Typography;

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "You can place an order by adding products to your cart and proceeding to checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, and other popular payment methods.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Frequently Asked Questions</Title>
      <Collapse accordion>
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQPage;
