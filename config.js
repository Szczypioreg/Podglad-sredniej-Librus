/**
 * LibPLUS
 * Author: Dawid Stankiewicz
 * theszczypiorek[ at ]gmail.com
 * github.com/DawidStankiewicz
 *
 */

/**
 * Location of grade data in html code
 */
var TITLE_ATTRIBUTE = 'title';
var GRADE_ID = "#Ocena";

/**
 * Grade types
 */
var GRADE_NORMAL = 'NORMAL';
var GRADE_MINUS = 'MINUS';
var GRADE_PLUS = 'PLUS';
var GRADE_PROPOSED_FIRST = 'PROPOSED_FIRST';
var GRADE_PROPOSED_SECOND = 'PROPOSED_SECOND';
var GRADE_END_FIRST = 'END_FISRT';
var GRADE_END_SECOND = 'END_SECOND';
var GRADE_UNPREPARED = "UNPREPARED";

/**
 * Grade categories
 */
var CATEGORY_PROPOSED_FISRT = 'przewidywana śródroczna';
var CATEGORY_END_FISRT = 'śródroczna';
var CATEGORY_PROPOSED_SECOND = 'przewidywana roczna';
var CATEGORY_END_SECOND = 'przewidywana roczna';


/**
 * Main container on page
 */
var LIBPLUS_ID = 'libplus';
var LIBPLUS_CONTAINER_ID = 'libplus-container';

/**
 * Student Avg containers on page
 */
var STUDENT_AVG_CONTAINER_ID = 'studentAvgContainer';
var STUDENT_AVG_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Średnia: </b><span id="' + STUDENT_AVG_CONTAINER_ID + '">-</span></div>';
var STUDENT_AVG_END_FIRST_CONTAINER_ID = 'studentAvgEndOfFirstPeriod';
var STUDENT_AVG_END_FIRST_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Średnia z ocen śródrocznych (I semestr): </b><span id="' + STUDENT_AVG_END_FIRST_CONTAINER_ID + '">-</span></div>';

/**
 * Student grade counter container on page
 */
var STUDENT_GRADE_COUNTER_CONTAINER_ID = 'allGradeCounter';
var STUDENT_GRADE_COUNTER_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Wszystkich ocen: </b><span id=' + STUDENT_GRADE_COUNTER_CONTAINER_ID + '>-</span></p></div>';

/**
 *
 */

var AVG_OF_SUBJECT_CONTAINER_ID = "avg_of_subject_";
var FIRST_SEMESTER_AVG_OF_SUBJECT_CONTAINER_ID = "first_semester_avg_subject_";
var SECOND_SEMESTER_AVG_OF_SUBJECT_CONTAINER_ID = "second_semester_avg_subject_";
/**
 * Date rage section on page
 */
var STUDENT_AVG_DATE_RAGE_CONTAINER_ID = 'avgDateRage';
var STUDENT_AVG_DATE_RAGE_CONTAINER = '<div class="' + LIBPLUS_CONTAINER_ID + '"><p><b>Średnia z wybranego okresu: </b><span id="' + STUDENT_AVG_DATE_RAGE_CONTAINER_ID + '">-</span></p></div>';
var STUDENT_AVG_DATE_RAGE_FROM_ID = "avgDateRageForm";
var STUDENT_AVG_DATE_RAGE_FROM = '<div class="' + LIBPLUS_CONTAINER_ID + '"><b>Oceny z wybranego okresu (miesiąc/dzień/rok): </b> <br> <form id="' + STUDENT_AVG_DATE_RAGE_FROM_ID + '"><input type="date" id="dateRageStart" title="Wprowadź datę początkową w formacie MM/DD/RRRR"/> <input type="date" id="dateRageEnd" title="Wprowadź datę końcową w formacie MM/DD/RRRR" /><input type="button" value="POKAŻ" id="showDataFromRange"/></form></p></div>';


/**
 * eg. 3.02564865545 to 3.03
 */
var DISPLAY_PRECISION_FLOAT_NUMBER = 2;

var DEBUG_GRADES = false;
var DEBUG_AVG_CALCULATE = false;