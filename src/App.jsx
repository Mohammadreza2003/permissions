import { useState } from "react";
import "./App.css";

const TotalItems = [
  {
    title: "خدمات",
    children: [
      {
        title: "آموزش و تحقیقات",
        children: [
          {
            title: "آموزش رسمی غیر دانشگاهی",
            children: [
              { title: "کودکستان غیر دولتی" },
              { title: "مدرسه غیر دولتی" },
            ],
          },
          {
            title: "آموزش رسمی دانشگاهی",
            children: [
              { title: "موسسه آموزش عالی آزاد" },
              { title: "مؤسسه آموزش عالی غیر دولتی (حضوری و مجازی)" },
            ],
          },
          {
            title: "آموزش مهارتی",
            children: [
              { title: "مرکز آموزش غیر دولتی (زبان، علمی و کنکور)" },
              { title: "تدریس خصوصی" },
            ],
          },
        ],
      },
      {
        title: "سلامت",
        children: [
          {
            title: "آموزش و ارتقا سلامت",
            children: [
              { title: "آموزشگاه بهداشت اصناف" },
              {
                title:
                  "مؤسسه خدمات آموزشی در امور فرآورده های آرایشی و بهداشتی",
              },
            ],
          },
          {
            title: "بهداشت",
            children: [
              { title: "دفتر خدمات سلامت" },
              { title: "خدمات بهداشت حرفه ای" },
            ],
          },
          {
            title: "درمان کلینیکی",
            children: [{ title: "بیمارستان" }, { title: "درمانگاه عمومی" }],
          },
        ],
      },
      {
        title: "امور اجتماعی و بهزیستی",
        children: [
          {
            title: "نگهداری شبانه روزی کودکان بی سرپرست و خیابانی",
            children: [
              { title: "خانه نوباوگان" },
              { title: "خانه کودکان و نوجوانان (پسران 13 تا 18 سال)" },
            ],
          },
          {
            title: "سلامت دختران و زنان",
            children: [
              { title: "خانه امن زنان تحت خشونت خانگی" },
              {
                title:
                  "مرکز حمایت و توانمندسازی زنان آسیب دیده اجتماعی (راه نوین)",
              },
            ],
          },
          {
            title: "خدمات بهزیستی",
            children: [
              { title: "مجتمع خدمات بهزیستی" },
              { title: "مرکز مثبت زندگی" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "کشاورزی",
    children: [
      {
        title: "تولیدات کشاورزی",
        children: [
          {
            title: "گلخانه",
            children: [
              { title: "شهرک گلخانه ای" },
              { title: "واحد گلخانه ای (مستقر در شهرک کشاورزی)" },
            ],
          },
          {
            title: "قارچ خوراکی",
            children: [
              { title: "شهرک قارچ خوراکی" },
              { title: "واحد قارچ خوراکی (مستقر در شهرک کشاورزی)" },
            ],
          },
          {
            title: "سایر محصولات",
            children: [
              { title: "پرورش خانگی گلمحمدی" },
              { title: "تولید خانگی آلوئه ورا" },
            ],
          },
        ],
      },
      {
        title: "خدمات کشاورزی",
        children: [
          {
            title: "حفظ نباتات و کنترل آفات",
            children: [
              {
                title:
                  "آزمایشگاه تشخیص آفات و بیماری های گیاهی (کلینیک های گیاه پزشکی)",
              },
              {
                title:
                  "تولید عوامل ماکرو ارگانیسم کنترل بیولوژیک آفات (انسکتاریوم گیاه پزشکی)",
              },
            ],
          },
          {
            title: "بذر و نهال",
            children: [
              { title: "واحد تولید نهال" },
              { title: "واحد تولید بذر اسپان قارچ خوراکی" },
            ],
          },
          {
            title: "مکانیزاسیون و ماشین‌آلات",
            children: [
              { title: "شرکت فنی تخصصی مکانیزاسیون" },
              { title: "خرده فروشی ادوات کشاورزی" },
            ],
          },
        ],
      },
      {
        title: "تولیدات دامی",
        children: [
          {
            title: "دام",
            children: [
              { title: "پرورش صنعتی و نیمه صنعتی گوسفند و بز" },
              { title: "پرورش صنعتی و نیمه صنعتی گاو و گاومیش" },
            ],
          },
          {
            title: "طیور",
            children: [
              { title: "پرورش صنعتی و نیمه صنعتی مرغ و طیور" },
              { title: "پرورش صنعتی و نیمه صنعتی جوجه یکروزه مرغ" },
            ],
          },
          {
            title: "شیلات",
            children: [
              { title: "صید و صیادی" },
              { title: "پرورش صنعتی و نیمه صنعتی ماهی در قفس" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "صنعت",
    children: [
      {
        title: "صنایع ماشین‌آلات و تجهیزات",
        children: [
          {
            title: "ماشین آلات کشاورزی",
            children: [
              { title: "تولید قطعات و ماشین آلات کشاورزی" },
              { title: "تولید وتعمیر ابزار کشاورزی و باغبانی" },
            ],
          },
          {
            title: "ماشین آلات پرورش دام و شیلات",
            children: [
              { title: "تولید قطعات و ماشین آلات پرورش دام و شیلات" },
              { title: "تولید وتعمیر ماشین آلات مرغداری" },
            ],
          },
          {
            title: "ماشین آلات مهندسی، عمرانی و معدنی",
            children: [
              { title: "تولید قطعات و ماشین آلات پروژه عمرانی و معدنی" },
              { title: "تولید و تعمیر ماشین آلات راهسازی ساختمانی و معدنی" },
            ],
          },
        ],
      },
      {
        title: "صنایع برقی و الکترونیکی",
        children: [
          {
            title: "قطعات، لوازم جانبی و تجهیزات ارتباطی",
            children: [
              { title: "تولید قطعات، لوازم جانبی و تجهیزات ارتباطی" },
              {
                title:
                  "تولید قطعات گوشی تلفن، تلفن سانترال الکترونیکی و دیجیتالی",
              },
            ],
          },
          {
            title: "قطعات، لوازم جانبی و تجهیزات رایانه ای",
            children: [
              { title: "تولید قطعات، لوازم جانبی و تجهیزات رایانه ای" },
              { title: "تولید و مونتاژ تجهیزات جانبی رایانه" },
            ],
          },
          {
            title: "ابزار دقیق، اندازه گیری و ساعت",
            children: [
              { title: "تولید ابزار دقیق، اندازه گیری و ساعت" },
              { title: "تولید و تعمیر انواع ترازو" },
            ],
          },
        ],
      },
      {
        title: "صنایع منسوجات و پوشاک",
        children: [
          {
            title: "آماده‌سازی و ریسندگی الیاف نساجی",
            children: [
              {
                title: "آماده‌سازی و ریسندگی الیاف نساجی",
              },
              { title: "تولید و فروش انواع پنبه ،اسفنج ،الیاف پشم و کرک و پر" },
            ],
          },
          {
            title: "بافندگی منسوجات و تولید پارچه",
            children: [
              { title: "بافندگی منسوجات و تولید پارچه" },
              { title: "بافندگی انواع منسوجات به صورت ماشینی" },
            ],
          },
          {
            title: "تکمیل منسوجات",
            children: [
              { title: "تکمیل منسوجات" },
              { title: "پلیسه انواع لباس" },
            ],
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [columns, setColumns] = useState([TotalItems]);

  const onSelect = (columnIndex, itemIndex) => {
    setSelectedItems((prevSelectedItems) => [
      ...prevSelectedItems.slice(0, columnIndex),
      columns[columnIndex][itemIndex],
    ]);
    setColumns((prevColumns) => [
      ...prevColumns.slice(0, columnIndex + 1),
      columns[columnIndex][itemIndex].children || [],
    ]);
  };


  return (
    <div className="app-container">
      <div className="header">
        <img
          src="/src/assets/headerTitle.png"
          alt="Header Title"
          className="title-img"
        />
        <br />
        <span className="title-text">درختواره کسب و کار</span>
        <div className="search-div">
          <input placeholder="جستجو" className="search-input" />
        </div>
        <div className="close-div">
          <button className="close-btn" type="button">
            <img
              className="close-img"
              src="/src/assets/close.png"
              alt="Close"
            />
          </button>
        </div>
        <br />
        <br />
        <div className="divHeaderOfPermissions"></div>
      </div>
      <br />
      <br />
      <br />
      <div className="items-container">
        {columns.map((items, index) => (
          <div className="column" key={index}>
            <ul style={{ borderRight: "1px solid #ccc" }}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex} onClick={() => onSelect(index, itemIndex)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
