/**
 * LibPLUS
 * Author: Dawid Stankiewicz
 * theszczypiorek[ at ]gmail.com
 * github.com/DawidStankiewicz
 *
 */

const
    TITLE_ATTRIBUTE = 'title',
    GRADE_ID = "#Ocena",

    /**
     * Grade types
     */
    GRADE_NORMAL = 'NORMAL',
    GRADE_MINUS = 'MINUS',
    GRADE_PLUS = 'PLUS',
    GRADE_PROPOSED_FIRST = 'PROPOSED_FIRST',
    GRADE_PROPOSED_SECOND = 'PROPOSED_SECOND',
    GRADE_END_FIRST = 'END_FISRT',
    GRADE_END_SECOND = 'END_SECOND',
    GRADE_UNPREPARED = "UNPREPARED",

    /**
     * Categories of grade
     */
    CATEGORY_PROPOSED_FISRT = 'przewidywana śródroczna',
    CATEGORY_END_FISRT = 'śródroczna',
    CATEGORY_PROPOSED_SECOND = 'przewidywana roczna',
    CATEGORY_END_SECOND = 'przewidywana roczna',

    /**
     * Main container
     */
    LIBPLUS_ID = 'libplus',
    LIBPLUS_CONTAINER_ID = 'libplus-container',


    STUDENT_AVG_CONTAINER_ID = 'studentAvgContainer',
    STUDENT_AVG_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Średnia: </b><span id="' + STUDENT_AVG_CONTAINER_ID + '">-</span></div>',
    STUDENT_AVG_END_FIRST_CONTAINER_ID = 'studentAvgEndOfFirstPeriod',
    STUDENT_AVG_END_FIRST_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Średnia z ocen śródrocznych (I semestr): </b><span id="' + STUDENT_AVG_END_FIRST_CONTAINER_ID + '">-</span></div>',


    STUDENT_GRADE_COUNTER_CONTAINER_ID = 'allGradeCounter',
    STUDENT_GRADE_COUNTER_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Wszystkich ocen: </b><span id=' + STUDENT_GRADE_COUNTER_CONTAINER_ID + '>-</span></p></div>',

    STUDENT_AVG_DATE_RAGE_CONTAINER_ID = 'avgDateRage',
    STUDENT_AVG_DATE_RAGE_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Średnia z wybranego okresu: </b><span id="' + STUDENT_AVG_DATE_RAGE_CONTAINER_ID + '">-</span></p></div>',
    STUDENT_AVG_DATE_RAGE_FROM_ID = "avgDateRageForm",
    STUDENT_AVG_DATE_RAGE_FROM = '<div class="' + LIBPLUS_CONTAINER_ID + '"><b>Oceny z wybranego okresu (miesiąc/dzień/rok): </b> <br> <form id="' + STUDENT_AVG_DATE_RAGE_FROM_ID + '"><input type="date" id="dateRageStart" title="Wprowadź datę początkową w formacie MM/DD/RRRR"/> <input type="date" id="dateRageEnd" title="Wprowadź datę końcową w formacie MM/DD/RRRR" /><input type="button" value="POKAŻ" id="showDataFromRange"/></form></p></div>',


    /**
     * eg. 3.02564865545 to 3.03
     */
    DISPLAY_PRECISION_FLOAT_NUMBER = 2,

    DEBUG_GRADES = false,
    DEBUG_AVG_CALCULATE = false;