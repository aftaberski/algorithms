def merge_ranges(ranges):
    sorted_ranges = sorted(ranges)
    merged_ranges = []

    previous_range_start, previous_range_end = sorted_ranges[0]

    for current_range_start, current_range_end in sorted_ranges[1:]:
        if current_range_start <= previous_range_end:
            previous_range_end = max(current_range_end, previous_range_end)
        else:
            merged_ranges.append((previous_range_start, previous_range_end))
            previous_range_start, previous_range_end = \
                current_range_start, current_range_end

    merged_ranges.append((previous_range_start, previous_range_end))

    return merged_ranges

ranges = [(1, 2), (1, 5), (7, 8)]
print merge_ranges(ranges)
