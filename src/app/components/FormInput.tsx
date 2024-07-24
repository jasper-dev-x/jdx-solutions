import {useState, useEffect} from "react";

export const defaultRing =
  "border-slate-300 focus:border-sky-500 focus:ring-sky-500";
export const notValidRing = "border-red-600 focus:ring-red-600";
export const validRing = "border-green-500 focus:ring-green-500";

export const FormInput = ({
  type = "text",
  label = "",
  subLabel = "",
  value,
  setValue = () => {},
  isValid = 0,
  placeholder = "",
  limit,
  rows = 2,
  readOnly = false,
  autoFocus = false,
  preTxt = "",
}: {
  type?: string;
  label?: string;
  subLabel?: string;
  value?: any;
  setValue?: Function;
  isValid?: number;
  placeholder?: string;
  limit?: number;
  rows?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  preTxt?: string;
}) => {
  const [ringColor, setRingColor] = useState<string>(defaultRing);

  // ON CHANGE
  const onChange = (input: string) => {
    if ((limit && input?.length <= limit) || !limit) setValue(input);
  };

  // VALIDATION WATCHER
  useEffect(() => {
    if (isValid == 0 || readOnly) setRingColor(defaultRing);
    else if (isValid == 1) setRingColor(validRing);
    else setRingColor(notValidRing);
  }, [value, isValid, readOnly]);

  if (type === "textarea")
    return (
      <label className='block w-full'>
        <div>
          <span
            className={`block txt-light text-lg ${label != "" ? "mb-1" : ""}`}>
            {label}
          </span>
        </div>
        <textarea
          rows={rows}
          name={label.toLowerCase()}
          prefix={preTxt}
          className={`block w-full px-3 py-2 bg-white border-2 rounded-lg font-sans placeholder-slate-400 focus:outline-none ${ringColor}`}
          value={value}
          onChange={(x) => onChange(x.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </label>
    );
  return (
    <label className='block w-full'>
      <div className='flex items-center gap-3'>
        <span
          className={`block txt-light text-lg ${label != "" ? "mb-1" : ""}`}>
          {label}
        </span>
        <span
          className={`block txt-light text-sm ${label != "" ? "mb-1" : ""}`}>
          {subLabel}
        </span>
      </div>

      <input
        autoFocus={autoFocus}
        type={type}
        autoCapitalize='none'
        name={label.toLowerCase()}
        prefix={preTxt}
        className={`block w-full px-3 py-2 bg-white border-2 rounded-lg font-sans placeholder-slate-400 focus:outline-none ${ringColor} text-black`}
        value={value}
        onChange={(x) => onChange(x.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </label>
  );
};
