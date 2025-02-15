import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/SpellSearch.css";
import Button from "./Button";

const SpellSearch = ({ onFilter }) => {
  return (
    <div className="filter-box">
      <Formik
        initialValues={{
          spellName: "",
          class: "",
          level: "",
          school: "",
          castTime: "",
        }}
        onSubmit={(values) => {
          onFilter(values);
        }}
      >
        {({ resetForm }) => (
          <Form className="spell-form">
            {/* Spell Name Input */}
            <div className="form-group">
              <label htmlFor="spellName">Spell Name</label>
              <Field
                type="text"
                name="spellName"
                placeholder="Enter a spell name"
                className="input-field"
              />
              <ErrorMessage
                name="spellName"
                component="div"
                className="error-message"
              />
            </div>

            {/* Class Dropdown */}
            <div className="form-group">
              <label htmlFor="class">Class</label>
              <Field as="select" name="class" className="input-field">
                <option value="">All Classes</option>
                <option value="bard">Bard</option>
                <option value="cleric">Cleric</option>
                <option value="druid">Druid</option>
                <option value="paladin">Paladin</option>
                <option value="ranger">Ranger</option>
                <option value="sorcerer">Sorcerer</option>
                <option value="warlock">Warlock</option>
                <option value="wizard">Wizard</option>
              </Field>
            </div>

            {/* Spell Level Dropdown */}
            <div className="form-group">
              <label htmlFor="level">Spell Level</label>
              <Field as="select" name="level" className="input-field">
                <option value="">All Levels</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i}>
                    {i === 0 ? "Cantrip" : `${i} Level`}
                  </option>
                ))}
              </Field>
            </div>

            {/* Spell School Dropdown */}
            <div className="form-group">
              <label htmlFor="school">Spell School</label>
              <Field as="select" name="school" className="input-field">
                <option value="">All Schools</option>
                <option value="abjuration">Abjuration</option>
                <option value="conjuration">Conjuration</option>
                <option value="divination">Divination</option>
                <option value="enchantment">Enchantment</option>
                <option value="evocation">Evocation</option>
                <option value="illusion">Illusion</option>
                <option value="necromancy">Necromancy</option>
                <option value="transmutation">Transmutation</option>
              </Field>
            </div>

            {/* Casting Time Dropdown */}
            <div className="form-group">
              <label htmlFor="castTime">Casting Time</label>
              <Field as="select" name="castTime" className="input-field">
                <option value="">All Casting Times</option>
                <option value="Instant">Instant</option>
                <option value="1 Action">1 Action</option>
                <option value="1 Minute">1 Minute</option>
                <option value="10 Minutes">10 Minutes</option>
                <option value="1 Hour">1 Hour</option>
                <option value="24 Hours">24 Hours</option>
              </Field>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <Button type="submit" variant="primary">
                Filter Spell
              </Button>
              <Button
                type="reset"
                variant="secondary"
                onClick={() => {
                  resetForm();
                  onFilter({
                    spellName: "",
                    class: "",
                    level: "",
                    school: "",
                    castTime: "",
                  });
                }}
              >
                Reset Filter
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SpellSearch;
