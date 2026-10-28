const COMPLETED_REASON = [
	"manual_candidate",
	"manual_assessor",
	"all_covered",
	"time_ceiling",
];

export const screenForReason = (reason?: string | null) => {
	if (!reason) return "complete";
	return "complete";
};

export const screenForSession = (status: string, endReason?: string | null) => {
	if (status === "failed") return "error";
	if (status === "ended") return screenForReason(endReason);
	return null;
};
