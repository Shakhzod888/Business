import React from "react";
import "../contact/contact.scss";

import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Input,
  Textarea,
  Notification,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";

function Contact() {
  const id = useId();
  const form = useForm({
    initialValues: { name: "", email: "", comment: "", phone: "" },
    validate: {
      name: (value) =>
        value.length < 4 ? "Name must have at least 4 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      comment: (value) =>
        value.length < 10 ? "Comment must be at least 10 characters" : null,
      phone: (value) =>
        value && value.length < 8
          ? "Phone must be at least 8 characters"
          : null,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.isValid) {
      const { name, email, phone, comment } = form.values;
      fetch(
        "https://api.telegram.org/bot6544667387:AAFJ7lCnLmhQ8sZEFe1ceI_Ih14Efp9EHwc/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "5293676049",
            text: `User: ${name}
                User Email: ${email}
                User Phone Number: ${phone}
                User's Message: ${comment}`,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Xabar botga yuborildi:", data);
          alert("Xabar botga yuborildi:");
        })
        .catch((error) => {
          console.error("Xabar yuborishda xatolik:", error);
        });
    } else {
      console.log("Form validation errors:", form.errors);
    }
  };

  return (
    <div className="section_8" id="contact">
      <div className="contact_container container">
        <div className="form_wrapper">
          <form onSubmit={handleSubmit}>
            <TextInput
              size="lg"
              radius={10}
              label="Name"
              className="contact_name"
              placeholder="Name"
              {...form.getInputProps("name")}
            />
            <TextInput
              mt="xl"
              radius={10}
              size="lg"
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
            />
            <Input.Wrapper
              mt="xl"
              id={id}
              required
              mx="auto"
              label="Your phone"
              size="xl"
              {...form.getInputProps("phone")}
            >
              <Input
                radius={10}
                size="lg"
                component={IMaskInput}
                mask="+998 (00) 000-00-00"
                id={id}
                placeholder="Your phone"
              />
            </Input.Wrapper>
            <Textarea
              placeholder="Message"
              label="Message"
              size="lg"
              radius={10}
              mt="xl"
              {...form.getInputProps("comment")}
            />
            <Button
              maw="100%"
              w="100%"
              type="submit"
              mt="xl"
              h={50}
              bg="#3FA796"
              fz={25}
            >
              Get in Touch
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
