export interface RoadSign {
  id: number;
  name: string;
  category: 'warning' | 'prohibitory' | 'mandatory' | 'informative';
  description: string;
  svg: string;
}

export const signCategories: { key: RoadSign['category']; label: string; color: string; icon: string }[] = [
  { key: 'warning', label: 'Предупредителни знаци', color: 'accent', icon: 'AlertTriangle' },
  { key: 'prohibitory', label: 'Забранителни знаци', color: 'danger', icon: 'Ban' },
  { key: 'mandatory', label: 'Задължителни знаци', color: 'brand', icon: 'CircleCheck' },
  { key: 'informative', label: 'Информационни знаци', color: 'success', icon: 'Info' },
];

export const roadSigns: RoadSign[] = [
  // Предупредителни
  {
    id: 1,
    name: 'Пешеходна пътека',
    category: 'warning',
    description: 'Предупреждава шофьорите, че наблизо има пешеходна пътека. Намалете скоростта и пропуснете пешеходците.',
    svg: 'pedestrian-crossing',
  },
  {
    id: 2,
    name: 'Деца',
    category: 'warning',
    description: 'Предупреждава за възможно наличие на деца на пътя, обикновено близо до училище или детска градина.',
    svg: 'children',
  },
  {
    id: 3,
    name: 'Опасен завой',
    category: 'warning',
    description: 'Предупреждава за опасен завой в дясно. Намалете скоростта и бъдете внимателни.',
    svg: 'curve-right',
  },
  {
    id: 4,
    name: 'Неравности на пътя',
    category: 'warning',
    description: 'Предупреждава за неравности по платното. Намалете скоростта, за да преминете безопасно.',
    svg: 'bumps',
  },
  {
    id: 5,
    name: 'Коларска пътека',
    category: 'warning',
    description: 'Предупреждава за пресичане на коларска пътека. Бъдете внимателни за велосипедисти.',
    svg: 'bike-crossing',
  },
  // Забранителни
  {
    id: 6,
    name: 'Забранено е влизането',
    category: 'prohibitory',
    description: 'Забранява влизането на всички пътни превозни средства в посока на знака.',
    svg: 'no-entry',
  },
  {
    id: 7,
    name: 'Забранено е изпреварването',
    category: 'prohibitory',
    description: 'Забранява изпреварване на други превозни средства, освен едноследни мотоциклети без кош.',
    svg: 'no-overtaking',
  },
  {
    id: 8,
    name: 'Забранена е спирането',
    category: 'prohibitory',
    description: 'Забранява спиране и паркиране на превозните средства по платното за движение.',
    svg: 'no-stopping',
  },
  {
    id: 9,
    name: 'Ограничение на скоростта',
    category: 'prohibitory',
    description: 'Забранява движение със скорост, по-висока от посочената на знака (напр. 50 км/ч).',
    svg: 'speed-limit',
  },
  // Задължителни
  {
    id: 10,
    name: 'Движение само направо',
    category: 'mandatory',
    description: 'Задължава участниците в движението да продължат само в посока направо.',
    svg: 'straight-only',
  },
  {
    id: 11,
    name: 'Кръстовище с равнозначен път',
    category: 'mandatory',
    description: 'Указва, че предстоящото кръстовище е равнозначно – трябва да се спазва правилото за предимство отдясно.',
    svg: 'roundabout',
  },
  {
    id: 12,
    name: 'Коларска пътека – задължителна',
    category: 'mandatory',
    description: 'Указва, че пътят или платното е предназначено само за велосипедисти.',
    svg: 'bike-path',
  },
  // Информационни
  {
    id: 13,
    name: 'Пешеходна пътека (информационен)',
    category: 'informative',
    description: 'Указва наличието на пешеходна пътека. Пешеходците имат предимство при пресичане.',
    svg: 'pedestrian-info',
  },
  {
    id: 14,
    name: 'Болница',
    category: 'informative',
    description: 'Указва местоположението на болница или медицинско заведение в близост.',
    svg: 'hospital',
  },
  {
    id: 15,
    name: 'Място за паркиране',
    category: 'informative',
    description: 'Указва разрешено място за паркиране на превозни средства.',
    svg: 'parking',
  },
  {
    id: 16,
    name: 'Колоездене разрешено',
    category: 'informative',
    description: 'Указва, че по дадения път е разрешено колоездене.',
    svg: 'bike-allowed',
  },
];
