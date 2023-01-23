import { Check } from "phosphor-react";
import { FormEvent, useCallback, useState } from "react";
import { CheckBox } from "../../../../components";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function HabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handleToggleWeekDay = useCallback((index: number) => {
    if (weekDays.includes(index)) {
      setWeekDays((prev) => prev.filter((item) => item !== index));
    } else {
      setWeekDays((prev) => [...prev, index]);
    }
  }, []);

  const handleCreateHabit = (event: FormEvent) => {
    event.preventDefault();
    console.log("title", title);
    console.log("weekDays", weekDays);
  };

  return (
    <form className="w-full flex flex-col mt-6" onSubmit={handleCreateHabit}>
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Exercícios, dormir bem, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="title" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      {availableWeekDays.map((day, index) => (
        <div key={day} className="mt-2 flex flex-col gap-3">
          <CheckBox label={day} onCheckedChange={() => handleToggleWeekDay(index)} />
        </div>
      ))}

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
