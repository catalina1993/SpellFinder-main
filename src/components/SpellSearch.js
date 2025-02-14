import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/SpellSearch.css";
import Button from "./Button"; 

const SpellSearch = () => {
  return (
    <div className="filter-box">
      <Formik>
        <Form className="spell-form">
          {/* Spell Name Input */}
          <div className="form-group">
            <label htmlFor="spell-name">Spell Name</label>
            <Field
              type="text"
              name="spell-name"
              placeholder="Enter a spell name"
              className="input-field"
            />
            <ErrorMessage
              name="spell-name"
              component="div"
              className="error-message"
            />
          </div>

          {/* Class Dropdown */}
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <Field as="select" name="class" className="input-field">
              <option>Barbarian</option>
              <option>Bard</option>
              <option>Cleric</option>
              <option>Druid</option>
              <option>Fighter</option>
              <option>Monk</option>
              <option>Paladin</option>
              <option>Ranger</option>
              <option>Rogue</option>
              <option>Sorcerer</option>
              <option>Warlock</option>
              <option>Wizard</option>
            </Field>
          </div>

          {/* Spell Level Dropdown */}
          <div className="form-group">
            <label htmlFor="spell-level">Spell Level</label>
            <Field as="select" name="spell-level" className="input-field">
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
              <option>9th</option>
            </Field>
          </div>

          {/* Spell School Dropdown */}
          <div className="form-group">
            <label htmlFor="spell-school">Spell School</label>
            <Field as="select" name="spell-school" className="input-field">
              <option>Enchantment</option>
              <option>Abjuration</option>
              <option>Conjuration</option>
              <option>Divination</option>
              <option>Transmutation</option>
              <option>Evocation</option>
              <option>Illusion</option>
              <option>Necromancy</option>
            </Field>
          </div>

          {/* Casting Time Dropdown */}
          <div className="form-group">
            <label htmlFor="cast-time">Casting Time</label>
            <Field as="select" name="cast-time" className="input-field">
              <option>Instant</option>
              <option>1 Action</option>
              <option>1 Minute</option>
              <option>10 Minutes</option>
              <option>1 Hour</option>
              <option>24 Hours</option>
            </Field>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <Button type="submit" variant="primary">
              Filter Spell
            </Button>
            <Button type="reset" variant="secondary">
              Reset Filter
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SpellSearch;
