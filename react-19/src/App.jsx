import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title, Text } = Typography;

function App() {
  const [formData, setFormData] = useState({
    name: "Name",
    description: "Description",
  });

  const [submittedData, setSubmittedData] = useState(formData);

  // обновляем состояние полей при вводе
  const handleValuesChange = (_, allValues) => {
    setFormData(allValues);
  };

  const handleFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div className="page">
      <Title level={2} className="page-title">
        Форма с использованием Ant Design
      </Title>

      <Form
        layout="vertical"
        initialValues={formData}
        onValuesChange={handleValuesChange}
        onFinish={handleFinish}
        className="form"
      >
        <Form.Item label="Имя" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Описание" name="description">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      <Card className="result-card">
        <Title level={4}>Отправленные данные:</Title>

        <p>
          <Text strong>Имя:</Text> <Text>{submittedData.name}</Text>
        </p>

        <p>
          <Text strong>Описание:</Text> <Text>{submittedData.description}</Text>
        </p>
      </Card>
    </div>
  );
}

export default App;
