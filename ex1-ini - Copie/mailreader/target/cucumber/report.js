$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("trier_mails.feature");
formatter.feature({
  "line": 1,
  "name": "Trier les mails",
  "description": "\nL\u0027utilisateur de mailreader doit pouvoir trier ses mails pour les retrouver plus facilement",
  "id": "trier-les-mails",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "# Régles de Gestion (RG) :"
    },
    {
      "line": 6,
      "value": "# - On tri les mails par importance puis statut puis sujet puis date (plus recente en premier)"
    },
    {
      "line": 7,
      "value": "# Les statuts sont par ordre d\u0027importance croissants : PAS_ENVOYE, ENVOYE, LU"
    },
    {
      "line": 8,
      "value": "# Les dates sont données au format ISO8601 à la seconde et en UTC."
    }
  ],
  "line": 11,
  "name": "comparaison de deux mails",
  "description": "",
  "id": "trier-les-mails;comparaison-de-deux-mails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"\u003cimportant1\u003e\", le statut \"\u003cstatut1\u003e\", le sujet \"\u003csujet1\u003e\" et la date \"\u003cdate1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"\u003cimportant2\u003e\", le statut \"\u003cstatut2\u003e\", le sujet \"\u003csujet2\u003e\" et la date \"\u003cdate2\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le test d\u0027égalité doit retourner \"\u003cresu\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "# Les resulats peuvent être : MAIL1_AVANT, MAIL1_APRES, EGAUX"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "trier-les-mails;comparaison-de-deux-mails;",
  "rows": [
    {
      "cells": [
        "important1",
        "important2",
        "statut1",
        "statut2",
        "sujet1",
        "sujet2",
        "date1",
        "date2",
        "resu"
      ],
      "line": 20,
      "id": "trier-les-mails;comparaison-de-deux-mails;;1"
    },
    {
      "cells": [
        "true",
        "false",
        "PAS_ENVOYE",
        "LU",
        "aaaaa",
        "bbbbbb",
        "2017-01-01T14:03:00Z",
        "2017-01-01T14:03:34Z",
        "MAIL1_AVANT"
      ],
      "line": 21,
      "id": "trier-les-mails;comparaison-de-deux-mails;;2"
    },
    {
      "cells": [
        "true",
        "true",
        "PAS_ENVOYE",
        "LU",
        "aaaaa",
        "bbbbbb",
        "2017-01-01T14:03:00Z",
        "2017-01-01T14:03:34Z",
        "MAIL1_APRES"
      ],
      "line": 22,
      "id": "trier-les-mails;comparaison-de-deux-mails;;3"
    },
    {
      "cells": [
        "true",
        "true",
        "LU",
        "LU",
        "aaaaa",
        "aaaaa",
        "2017-01-01T14:03:00Z",
        "2017-01-01T14:03:34Z",
        "MAIL1_AVANT"
      ],
      "line": 23,
      "id": "trier-les-mails;comparaison-de-deux-mails;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "comparaison de deux mails",
  "description": "",
  "id": "trier-les-mails;comparaison-de-deux-mails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"true\", le statut \"PAS_ENVOYE\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:00Z\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"false\", le statut \"LU\", le sujet \"bbbbbb\" et la date \"2017-01-01T14:03:34Z\"",
  "matchedColumns": [
    1,
    3,
    5,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le test d\u0027égalité doit retourner \"MAIL1_AVANT\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 35
    },
    {
      "val": "PAS_ENVOYE",
      "offset": 53
    },
    {
      "val": "aaaaa",
      "offset": 76
    },
    {
      "val": "2017-01-01T14:03:00Z",
      "offset": 95
    }
  ],
  "location": "MailComparaisonStep.un_premier_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 128638065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 34
    },
    {
      "val": "LU",
      "offset": 53
    },
    {
      "val": "bbbbbb",
      "offset": 68
    },
    {
      "val": "2017-01-01T14:03:34Z",
      "offset": 88
    }
  ],
  "location": "MailComparaisonStep.un_second_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 141413,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 23165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAIL1_AVANT",
      "offset": 34
    }
  ],
  "location": "MailComparaisonStep.le_test_d_egalité(String)"
});
formatter.result({
  "duration": 76017,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "comparaison de deux mails",
  "description": "",
  "id": "trier-les-mails;comparaison-de-deux-mails;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"true\", le statut \"PAS_ENVOYE\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:00Z\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"true\", le statut \"LU\", le sujet \"bbbbbb\" et la date \"2017-01-01T14:03:34Z\"",
  "matchedColumns": [
    1,
    3,
    5,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le test d\u0027égalité doit retourner \"MAIL1_APRES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 35
    },
    {
      "val": "PAS_ENVOYE",
      "offset": 53
    },
    {
      "val": "aaaaa",
      "offset": 76
    },
    {
      "val": "2017-01-01T14:03:00Z",
      "offset": 95
    }
  ],
  "location": "MailComparaisonStep.un_premier_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 326563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 34
    },
    {
      "val": "LU",
      "offset": 52
    },
    {
      "val": "bbbbbb",
      "offset": 67
    },
    {
      "val": "2017-01-01T14:03:34Z",
      "offset": 87
    }
  ],
  "location": "MailComparaisonStep.un_second_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 155297,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 16185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAIL1_APRES",
      "offset": 34
    }
  ],
  "location": "MailComparaisonStep.le_test_d_egalité(String)"
});
formatter.result({
  "duration": 71630,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "comparaison de deux mails",
  "description": "",
  "id": "trier-les-mails;comparaison-de-deux-mails;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "un premier mail avec l\u0027importance \"true\", le statut \"LU\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:00Z\"",
  "matchedColumns": [
    0,
    2,
    4,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "un second mail avec l\u0027importance \"true\", le statut \"LU\", le sujet \"aaaaa\" et la date \"2017-01-01T14:03:34Z\"",
  "matchedColumns": [
    1,
    3,
    5,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "le test d\u0027égalité doit retourner \"MAIL1_AVANT\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 35
    },
    {
      "val": "LU",
      "offset": 53
    },
    {
      "val": "aaaaa",
      "offset": 68
    },
    {
      "val": "2017-01-01T14:03:00Z",
      "offset": 87
    }
  ],
  "location": "MailComparaisonStep.un_premier_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 171837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 34
    },
    {
      "val": "LU",
      "offset": 52
    },
    {
      "val": "aaaaa",
      "offset": 67
    },
    {
      "val": "2017-01-01T14:03:34Z",
      "offset": 86
    }
  ],
  "location": "MailComparaisonStep.un_second_mail(boolean,Mail$Statut,String,String)"
});
formatter.result({
  "duration": 144935,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 20182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAIL1_AVANT",
      "offset": 34
    }
  ],
  "location": "MailComparaisonStep.le_test_d_egalité(String)"
});
formatter.result({
  "duration": 60478,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "ordre d\u0027une liste de mails",
  "description": "",
  "id": "trier-les-mails;ordre-d\u0027une-liste-de-mails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "les mails :",
  "rows": [
    {
      "cells": [
        "important",
        "statut",
        "sujet",
        "date"
      ],
      "line": 28
    },
    {
      "cells": [
        "true",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 29
    },
    {
      "cells": [
        "false",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 30
    },
    {
      "cells": [
        "false",
        "LU",
        "bbbbb",
        "2016-12-01T14:03:00Z"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "je trie",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "la liste ordonnée doit être :",
  "rows": [
    {
      "cells": [
        "important",
        "statut",
        "sujet",
        "date"
      ],
      "line": 35
    },
    {
      "cells": [
        "true",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 36
    },
    {
      "cells": [
        "false",
        "LU",
        "bbbbb",
        "2016-12-01T14:03:00Z"
      ],
      "line": 37
    },
    {
      "cells": [
        "false",
        "PAS_ENVOYE",
        "aaaaa",
        "2017-01-01T14:03:00Z"
      ],
      "line": 38
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MailOrderStep.les_mails(Mail\u003e)"
});
formatter.result({
  "duration": 49216980,
  "status": "passed"
});
formatter.match({
  "location": "MailComparaisonStep.je_trie()"
});
formatter.result({
  "duration": 44284,
  "status": "passed"
});
formatter.match({
  "location": "MailOrderStep.la_liste_ordonnée_doit_être(Mail\u003e)"
});
formatter.result({
  "duration": 4515692,
  "status": "passed"
});
});