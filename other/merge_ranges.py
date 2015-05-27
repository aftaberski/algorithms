def merge_ranges(meetings):
    sorted_meetings = sorted(meetings)
    merged_meetings = []

    previous_meeting_start, previous_meeting_end = sorted_meetings[0]

    for current_meeting_start, current_meeting_end in sorted_meetings[1:]:
        if current_meeting_start <= previous_meeting_end:
            previous_meeting_end = max(current_meeting_end, previous_meeting_end)
        else:
            merged_meetings.append((previous_meeting_start, previous_meeting_end))
            previous_meeting_start, previous_meeting_end = \
                current_meeting_start, current_meeting_end

    merged_meetings.append((previous_meeting_start, previous_meeting_end))

    return merged_meetings

meetings = [(1, 2), (1, 5), (7, 8)]
print merge_ranges(meetings)
