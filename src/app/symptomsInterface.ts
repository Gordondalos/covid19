export class SymptomsInterface {
  soreThroat: number;
  sneezing: number;
  runnyNose: number;
  cough: number;
  temperature: number;
  fatigue: number;
  bodyAches: number;
  chills: number;
  headache: number;
  difficultyBreathing: number;
  nausea: number;
  vomiting: number;
  diarrhea: number;
  stomachAche: number;

  constructor(
    soreThroat,
    sneezing,
    runnyNose,
    cough,
    temperature,
    fatigue,
    bodyAches,
    chills,
    headache,
    difficultyBreathing,
    nausea,
    vomiting,
    diarrhea,
    stomachAche,
  ) {
    this.soreThroat = soreThroat;
    this.sneezing = sneezing;
    this.runnyNose = runnyNose;
    this.cough = cough;
    this.temperature = temperature;
    this.fatigue = fatigue;
    this.bodyAches = bodyAches;
    this.chills = chills;
    this.headache = headache;
    this.difficultyBreathing = difficultyBreathing;
    this.nausea = nausea;
    this.vomiting = vomiting;
    this.diarrhea = diarrhea;
    this.stomachAche = stomachAche;
  }
}
