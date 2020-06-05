// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

/* const a = (d: string): void => console.log(d);

const b = (d: string): string => d;

type cType = (d: string) => void;

const c: cType = (d) => console.log(d);

type dType = (d: string) => string;

const d: dType = (d) => d;

interface ILili {
  text: string;
}

const g: ILili = { text: "aa" }; */
